import {
  getGithubProfile,
  getGithubRepositories,
} from "../services/github.service.js";

import {
  createProfile,
  getAllProfiles as getAllProfilesModel,
  getProfileByUsername,
} from "../models/profile.model.js";


//  Analyze GitHub Profile

export const analyzeProfile = async (req, res) => {
  try {
    const { username } = req.params;

    // Fetch GitHub user
    const githubUser = await getGithubProfile(username);

    // Fetch repositories
    const repositories = await getGithubRepositories(username);

    // Calculate total stars
    const totalStars = repositories.reduce(
      (sum, repo) => sum + repo.stargazers_count,
      0
    );

    
    const totalForks = repositories.reduce(
      (sum, repo) => sum + repo.forks_count,
      0
    );

   
    const profile = {
      username: githubUser.login,
      name: githubUser.name,
      bio: githubUser.bio,
      avatar_url: githubUser.avatar_url,
      profile_url: githubUser.html_url,
      public_repos: githubUser.public_repos,
      followers: githubUser.followers,
      following: githubUser.following,
      public_gists: githubUser.public_gists,
      company: githubUser.company,
      location: githubUser.location,
      blog: githubUser.blog,
      twitter_username: githubUser.twitter_username,
      total_stars: totalStars,
      total_forks: totalForks,
      account_created_at: new Date(githubUser.created_at)
    };

    // Save to MySQL
    await createProfile(profile);

    res.status(201).json({
      success: true,
      message: "GitHub profile analyzed successfully.",
      data: profile,
    });

  } catch (error) {
    console.error(error);

    // GitHub user not found
    if (error.response?.status === 404) {
      return res.status(404).json({
        success: false,
        message: "GitHub user not found.",
      });
    }

    // Duplicate username
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({
        success: false,
        message: "This profile has already been analyzed.",
      });
    }

    res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

// Get All Profiles
 
export const getAllProfiles = async (req, res) => {
  try {
    const profiles = await getAllProfilesModel();

    res.status(200).json({
      success: true,
      count: profiles.length,
      data: profiles,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};


//  Get Single Profile

export const getProfile = async (req, res) => {
  try {
    const { username } = req.params;

    const profile = await getProfileByUsername(username);

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: profile,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};