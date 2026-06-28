import pool from "../config/db.js";

// Create Profile
 
export const createProfile = async (profile) => {
  const query = `
    INSERT INTO profiles (
      username,
      name,
      bio,
      avatar_url,
      profile_url,
      public_repos,
      followers,
      following,
      public_gists,
      company,
      location,
      blog,
      twitter_username,
      total_stars,
      total_forks,
      account_created_at
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    profile.username,
    profile.name,
    profile.bio,
    profile.avatar_url,
    profile.profile_url,
    profile.public_repos,
    profile.followers,
    profile.following,
    profile.public_gists,
    profile.company,
    profile.location, 
    profile.blog,
    profile.twitter_username,
    profile.total_stars,
    profile.total_forks,
    profile.account_created_at,
  ];

  const [result] = await pool.execute(query, values);

  return result;
};


  // Get All Profiles
 
export const getAllProfiles = async () => {
  const [rows] = await pool.execute(`
      SELECT *
      FROM profiles
      ORDER BY analyzed_at DESC
  `);

  return rows;
};


//  Get Single Profile

export const getProfileByUsername = async (username) => {
  const [rows] = await pool.execute(
    `
      SELECT *
      FROM profiles
      WHERE username = ?
    `,
    [username]
  );

  return rows[0];
};