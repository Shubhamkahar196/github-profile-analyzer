import express from 'express'
import {getGithubProfile} from '../services/github.service.js'
import { getGithubRepositories } from '../services/github.service.js';

export const analyzeProfile = async(req,res)=>{
    try {
        const {username} = req.params;
        const githubUser = await getGithubProfile(username);
        const repositories = await getGithubRepositories(username)

        const totalStars = repositories.reduce(
            (sum,repo)=>sum+repo.stargazer_count,0
        )

        const totalForks = repositories.reduce((sum,repo)=> sum+repo.forks_count,0)

        const profile={
            username: githubUser.login,
            name: githubUser.name,
            bio: githubUser.bio,
            avatar_url: githubUser.avatar_url,
            profile_url: githubUser.profile_url,
            public_repos: githubUser.public_repos,
            followers: githubUser.followers,
            following: githubUser.following,
            public_gists: githubUser.public_gists,
            company:githubUser.company,
            location: githubUser.location,
            blog: githubUser.blog,
            twitter_username: githubUser.twitter_username,
            total_stars: totalStars,
            total_forks: totalForks,
            account_created_at: githubUser.created_at,
        }

        await createProfile(profile);

        res.status(201).json({
            success: true,
            message: "Github profile analyzed successfully",
            data: profile,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
    }
}