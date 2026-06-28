import axios from 'axios';

const GITHUB_BASE_URL = "https://api.github.com";

export const getGithubProfile = async(username)=>{
    try {
        const response = await axios.get(
            `${GITHUB_BASE_URL}/users/${username}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getGithubRepositories = async(username)=>{
    try {
        const response = await axios.get(
            `${GITHUB_BASE_URL}/users/${username}/repos`
        )
        return response.data;
    } catch (error) {
        throw error;
    }
}