"use client";
import { useState } from "react";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function WorkingWithRemoteObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${HTTP_SERVER}/lab5/assignment`}>
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title"
        href={`${HTTP_SERVER}/lab5/assignment/title`}>
        Get Title
      </a>
      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <input id="wd-assignment-title" value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
      <h4>Module (On Your Own)</h4>
      <a id="wd-retrieve-module" href={`${HTTP_SERVER}/lab5/module`}>
        Get Module
      </a>
      <a id="wd-retrieve-module-name" href={`${HTTP_SERVER}/lab5/module/name`}>
        Get Module Name
      </a>
      <hr />
    </div>
  );
}
