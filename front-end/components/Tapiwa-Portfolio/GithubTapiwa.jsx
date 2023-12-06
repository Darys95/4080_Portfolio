import React, { useEffect, useState } from "react";
import TNav from "./TNav";
import axios from "axios";
import "./Github.css";

function GithubTapiwa() {
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [commits, setCommits] = useState(0);
  const [pullRequests, setPullRequests] = useState(0);

  const getCommits = async () => {
    let totalCommits = 0;
    for (const repo of repos) {
      const response = await fetch(repo.commits_url.replace("{/sha}", ""));
      const commitsData = await response.json();
      totalCommits += commitsData.length;
    }
    setCommits(totalCommits);
  };

  const getPullRequests = async () => {
    let totalPullRequests = 0;
    for (const repo of repos) {
      const response = await fetch(
        `https://api.github.com/repos/Civil-t/${repo.name}/pulls?state=all`
      );
      const pullRequestsData = await response.json();
      totalPullRequests += pullRequestsData.length;
    }
    setPullRequests(totalPullRequests);
  };

  const getFollowers = async () => {
    const response = await fetch(
      "https://api.github.com/users/Civil-t/followers"
    );
    const followersData = await response.json();
    setFollowers(followersData);
  };

  const getFollowing = async () => {
    const response = await fetch(
      "https://api.github.com/users/Civil-t/following"
    );
    const followingData = await response.json();
    setFollowing(followingData);
  };

  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [events, setEvents] = useState([]);

  const getUser = async () => {
    const response = await fetch("https://api.github.com/users/Civil-t");
    const userData = await response.json();
    setUser(userData);
  };

  const getRepos = async () => {
    const response = await fetch("https://api.github.com/users/Civil-t/repos");
    const reposData = await response.json();
    setRepos(reposData);
  };

  const getEvents = async () => {
    const response = await fetch("https://api.github.com/users/Civil-t/events");
    const eventsData = await response.json();
    setEvents(eventsData);
  };

  useEffect(() => {
    getUser();
    getRepos();
    getEvents();
    getFollowers();
    getFollowing();
    getCommits();
    getPullRequests();
  }, [repos]);

  // ... rest of the component

  return (
    <>
      <TNav />
      <div
        className="container"
        style={{
          marginTop: "50px",
          marginLeft: "50px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        {user && (
          <div className="card_item" key={user.id}>
            <div className="card_inner">
              <img src={user.avatar_url} alt="" />
              <div className="userName">{user.login}</div>
              <div className="userUrl">{user.url}</div>
              <div className="detail-box">
                <div className="gitDetail">
                  <span>Articles</span>23
                </div>
                <div className="gitDetail">
                  <span>Following</span>
                  {user.following}
                </div>
                <div className="gitDetail">
                  <span>Followers</span>
                  {user.followers}
                </div>
              </div>
              <div className="detail-box">
                <div className="gitDetail">
                  <span>Repositories</span>
                  {repos.length}
                </div>
                <div className="gitDetail">
                  <span>Events</span>
                  {events.length}
                </div>
              </div>
              <a
                href="https://github.com/Civil-t"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="seeMore">See More</button>
              </a>
            </div>
          </div>
        )}
        <div className="card_item" style={{ width: "70%" }}>
          <div
            className="card_inner"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div style={{ flex: 1.25 }}>
              <h2>Repositories</h2>
              {repos.map((repo) => (
                <p key={repo.id}>{repo.name}</p>
              ))}
            </div>
            <div style={{ flex: 1.25 }}>
              <div>
                <h2>Followers</h2>
                {followers.map((follower) => (
                  <p key={follower.id}>{follower.login}</p>
                ))}
              </div>
              <div>
                <h2>Following</h2>
                {following.map((user) => (
                  <p key={user.id}>{user.login}</p>
                ))}
              </div>
              <div>
                <h2>Commits</h2>
                <p>{commits}</p>
              </div>
              <div>
                <h2>Pull Requests</h2>
                <p>{pullRequests}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GithubTapiwa;
