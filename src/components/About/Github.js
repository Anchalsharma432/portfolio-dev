import React from "react";
// import GitHubCalendar from "react-github-calendar";
import GitHubCalendar from "react-github-contribution-calendar";
import { Row } from "react-bootstrap";
const mockContributions = {
  "2025-10-01": 2,
  "2025-10-02": 1,
  "2025-10-03": 3,
};
function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>

      <GitHubCalendar 
        username="Anchalsharma432"
        contributions={mockContributions}
        blockSize={15}
        blockMargin={5}
        theme={{
          light: ["#ecd9fc", "#c084f5", "#b265f6", "#b22ff4", "#8400b8"],
          dark: ["#8400b8", "#b22ff4", "#b265f6", "#c084f5", "#ecd9fc"],
        }}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
