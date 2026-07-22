# SYSTEM ARCHITECTURE & DATA SCHEMAS — KIZUNA (絆)

This document details the data structures, message delivery queue mechanics, and network boundary algorithms powering **Kizuna (絆)**, incorporating the **Interpersonal vs. Intrapersonal Framework**.

---

## 1. Relational Data Schemas

```sql
-- User Profile & Sanctum Settings
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(50) UNIQUE NOT NULL,
    display_name VARCHAR(100) NOT NULL,
    avatar_url TEXT,
    solitude_mode BOOLEAN DEFAULT FALSE,
    theme_mode VARCHAR(20) DEFAULT 'light', -- 'light', 'dark'
    delivery_cadence VARCHAR(20) DEFAULT '3x_weekly', -- '3x_weekly', '5x_weekly', 'sunday_digest'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Inner Circle Relationships (Sanctuary)
CREATE TABLE sanctuary_connections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    friend_id UUID REFERENCES users(id) ON DELETE CASCADE,
    status VARCHAR(20) DEFAULT 'active', -- 'active', 'archived_fading'
    added_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT max_15_check CHECK (status != 'active' OR (SELECT COUNT(*) FROM sanctuary_connections WHERE user_id = user_id AND status = 'active') <= 15)
);

-- Interpersonal Time Capsules (Omoide)
CREATE TABLE time_capsules (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    sender_id UUID REFERENCES users(id),
    recipient_id UUID REFERENCES users(id),
    title VARCHAR(150) NOT NULL,
    content_text TEXT,
    audio_url TEXT,
    unlock_date TIMESTAMP WITH TIME ZONE NOT NULL,
    is_unlocked BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Intrapersonal Solitude Journal (Shizuka)
CREATE TABLE solitude_entries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    mood_score INT CHECK (mood_score BETWEEN 1 AND 5),
    journal_text TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Micro-Group Living Rooms (Fireside)
CREATE TABLE fireside_circles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    created_by UUID REFERENCES users(id),
    weekly_prompt TEXT NOT NULL,
    prompt_expires_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Fireside Circle Members & Unveil Status
CREATE TABLE fireside_responses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    circle_id UUID REFERENCES fireside_circles(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id),
    response_text TEXT NOT NULL,
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

---

*Architectural Reference for Team Antigravity | OGIS 2026*
