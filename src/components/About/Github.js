import React, { useEffect, useState } from "react";
import ActivityCalendar from "react-activity-calendar";
import axios from "axios";
import { Row } from "react-bootstrap";

function Github() {
  const [data, setData] = useState([]);
  const username = "Anchalsharma432"; // your GitHub username

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://api.github.com/graphql",
          {
            query: `
              query {
                user(login: "${username}") {
                  contributionsCollection {
                    contributionCalendar {
                      weeks {
                        contributionDays {
                          date
                          contributionCount
                        }
                      }
                    }
                  }
                }
              }
            `,
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
            },
          }
        );

        const weeks =
          response.data.data.user.contributionsCollection.contributionCalendar
            .weeks;

        const flattened = weeks.flatMap((week) =>
          week.contributionDays.map((day) => ({
            date: day.date,
            count: day.contributionCount,
            level: Math.min(day.contributionCount, 4),
          }))
        );

        setData(flattened);
      } catch (err) {
        console.error("GitHub API error:", err);
      }
    };

    fetchData();
  }, [username]);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>

      {data.length > 0 ? (
        <ActivityCalendar
          data={data}
          colorScheme="dark"
          theme={{
            light: ["#ebedf0", "#216e39"],
            dark: ["#161b22", "#39d353"],
          }}
          labels={{
            totalCount: "Total contributions",
          }}
        />
      ) : (
        <p style={{ color: "#aaa" }}>Loading your contributions...</p>
      )}
    </Row>
  );
}

export default Github;
