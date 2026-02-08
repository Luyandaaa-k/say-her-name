# Database Schema - Say Her Name Memorial

## Overview
This document defines the data structure for the Say Her Namegit
 application.

## Tables

### `victims`
Stores information about each person being honored in the memorial.

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | SERIAL | Yes | Auto | Primary key, unique identifier |
| name | VARCHAR(255) | Yes | - | Victim's full name |
| date_of_incident | DATE | No | NULL | Date of the incident |
| location | VARCHAR(255) | No | NULL | Country or city |
| cause_of_death | TEXT | No | NULL | Brief description (optional, sensitive) |
| photo_url | VARCHAR(500) | No | NULL | Cloudinary URL for victim's photo |
| submitted_by | VARCHAR(100) | No | 'Anonymous' | Relationship of submitter |
| approved | BOOLEAN | Yes | FALSE | Moderation status (admin approval required) |
| created_at | TIMESTAMP | Yes | NOW() | Submission timestamp |

**Indexes:**
- Primary key on `id`
- Index on `approved` (for fast filtering of approved entries)
- Index on `created_at` (for chronological ordering)

---

### `candles`
Tracks real-time candle lighting for each victim.

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | SERIAL | Yes | Auto | Primary key, unique identifier |
| victim_id | INTEGER | Yes | - | Foreign key referencing victims(id) |
| lit_at | TIMESTAMP | Yes | NOW() | When the candle was lit |

**Indexes:**
- Primary key on `id`
- Foreign key on `victim_id` references `victims(id)` ON DELETE CASCADE
- Index on `lit_at` (for real-time queries)

**Notes:**
- Candles older than 24 hours may be auto-deleted (cleanup job)
- This allows real-time "X people are lighting candles now" feature

---

## Future Tables (Phase 2)

### `perpetrators` (Not implemented yet)
Will store perpetrator registry with anonymity options.

---

## Design Decisions

**Why separate tables?**
- `victims`: Permanent memorial records
- `candles`: Temporary, real-time interaction data

**Why `approved` field?**
- Prevents spam/abuse
- Ensures dignity of memorial
- Admin moderation required before public display

**Why Cloudinary URLs instead of storing images in DB?**
- Database stores only URLs (text), not binary image data
- Cloudinary handles image hosting, optimization, CDN
- Faster queries, smaller database size