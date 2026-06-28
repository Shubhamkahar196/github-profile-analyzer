CREATE DATABASE github_profile_analyzer;

USE github_profile_analyzer;

CREATE TABLE profiles(
id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(100) NOT NULL UNIQUE,
name VARCHAR(255),
bio TEXT,
avatar_url TEXT,
profile_url TEXT,
public_repos INT DEFAULT 0,
followers INT DEFAULT 0,
following INT DEFAULT 0,
public_gists INT DEFAULT 0,
company VARCHAR(255),
location VARCHAR(255),
blog VARCHAR(255),
twitter_username VARCHAR(255),
total_start INT DEFAULT 0,
total_forks INT DEFAULT 0,
account_created_at DATETIME,
analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);