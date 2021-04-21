--
-- File generated with SQLiteStudio v3.3.2 on Sat Apr 3 18:42:19 2021
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: Account
CREATE TABLE Account (
    [Username ID] NUMERIC       REFERENCES [Student Profile]
                                NOT NULL,
    Username      NVARCHAR (30) NOT NULL
                                REFERENCES [Student Profile] (Username) ON DELETE CASCADE
                                                                        ON UPDATE CASCADE,
    Password      STRING (8)    REFERENCES [Student Profile] (Password) ON DELETE CASCADE
                                                                        ON UPDATE CASCADE
                                NOT NULL
                                CHECK (length(password) <= 8),
    UNIQUE (
        [Username ID],
        Username,
        Password
    )
    ON CONFLICT IGNORE,
    FOREIGN KEY (
        [Username ID],
        Username,
        Password
    )
    REFERENCES Account ([Username ID],
    Username,
    Password) ON DELETE NO ACTION
              ON UPDATE NO ACTION
);


-- Table: Achievements
CREATE TABLE Achievements (
    [Assessment Score] NUMERIC
);


-- Table: Answer
CREATE TABLE Answer (
    Answer NVARCHAR,
    Flag   BOOLEAN
);


-- Table: Assessment
CREATE TABLE Assessment (
    [Assessment Type]  STRING,
    [Assessment Items] NUMERIC,
    HealthStatus       INTEGER,
    [Reward Points]    INTEGER
);
-- Table: Avatar
CREATE TABLE Avatar (
    Outfit       BLOB,
    [Skin Color] BLOB,
    [Hair Type]  BLOB,
    [Body Type]  BLOB,
    Gender       BLOB,
    Accessories  BLOB,
    [Aura Type]  BLOB,
    [Shoes Type] BLOB,
    [Eyes Type]  BLOB,
    [Nose Type]  BLOB,
    [Lips Type]  BLOB,
    [Avatar ID]  NUMERIC PRIMARY KEY
                         UNIQUE
);
-- Table: Avatar Outfit
CREATE TABLE [Avatar Outfit] (
    [Girl Outfit] BLOB REFERENCES Avatar (Outfit),
    [Boy Outfit]  BLOB REFERENCES Avatar (Outfit),
    Accessories   BLOB REFERENCES Avatar (Accessories) 
);
-- Table: Bisaya Terms
CREATE TABLE [Bisaya Terms] (
    Terms      STRING,
    Definition TEXT
);
-- Table: Health Potions
CREATE TABLE [Health Potions] (
    [Health Level] NUMERIC REFERENCES [Health Status] ([Health Level]) ON UPDATE CASCADE
);
-- Table: Health Status
CREATE TABLE [Health Status] (
    [Health Level] NUMERIC DEFAULT (100) 
);
-- Table: Lesson
CREATE TABLE Lesson (
    [Lesson ID]      STRING  PRIMARY KEY
                             UNIQUE
                             NOT NULL,
    [Lesson Title]   STRING,
    [Lesson Number]  NUMERIC,
    [Lesson Content] TEXT
);
-- Table: Progress
CREATE TABLE Progress (
    Username        STRING  REFERENCES [Student Profile] (Username),
    [Topics Taken]  STRING,
    [Last Taken]    DATE,
    [Reward Points] NUMERIC,
    [Health Status] STRING,
    Achievements    NUMERIC
);


-- Table: Reward Points
CREATE TABLE [Reward Points] (
    [Reward Points] NUMERIC DEFAULT (0) 
);


-- Table: Student Profile
CREATE TABLE [Student Profile] (
    [Last Name]   STRING (26)   NOT NULL,
    [Middle Name] STRING        DEFAULT NULL,
    [First Name]  STRING (26)   NOT NULL,
    Age           NUMERIC       NOT NULL,
    Birthday      DATETIME      NOT NULL,
    GradeLevel    NUMERIC       NOT NULL
                                CHECK (1 <= GradeLevel <= 3),
    [Username ID] STRING        PRIMARY KEY
                                UNIQUE ON CONFLICT REPLACE
                                NOT NULL,
    Username      NVARCHAR (30) NOT NULL
                                UNIQUE ON CONFLICT ROLLBACK
                                REFERENCES [Student Profile] (Username) ON DELETE SET NULL
                                                                        ON UPDATE NO ACTION
                                                                        MATCH SIMPLE,
    Password      NVARCHAR (8)  NOT NULL
                                CHECK (length(password) <= 8) 
                                UNIQUE ON CONFLICT ROLLBACK,
    UNIQUE (
        [Username ID],
        Username,
        Password
    )
    ON CONFLICT IGNORE,
    FOREIGN KEY (
        Username
    )
    REFERENCES [Student Profile] (Username) ON DELETE NO ACTION
                                            ON UPDATE NO ACTION
);


-- Table: Tiangge
CREATE TABLE Tiangge (
    [Reward Points]  NUMERIC,
    [Outfit Section] STRING,
    [Health Section] STRING
);


-- Table: Topic
CREATE TABLE Topic (
    [Lesson ID]     STRING   REFERENCES Lesson ([Lesson ID]) ON DELETE CASCADE
                                                             ON UPDATE CASCADE,
    [Topic ID]      STRING   PRIMARY KEY
                             UNIQUE
                             NOT NULL,
    [Topic Title]   STRING   NOT NULL,
    [Topic Number]  NUMERIC  NOT NULL,
    [Topic Content] TEXT,
    [Last Accessed] DATETIME
);


COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
