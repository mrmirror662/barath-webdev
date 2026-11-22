"use client";
import { useEffect, useState } from "react";
import * as client from "./client";
export default function WorkingWithRemoteObjectsAsynchronously() {
  const [assignment, setAssignment] = useState<{ title?: string; completed?: boolean }>({});
  const fetchAssignment = async () => {
    setAssignment(await client.fetchAssignment());
  };
  const updateTitle = async () => {
    setAssignment(await client.updateTitle(assignment.title ?? ""));
  };
  useEffect(() => { fetchAssignment(); }, []);
  return (
    <div id="wd-asynchronous-objects">
      <h3>Working with Objects Asynchronously</h3>
      <h4>Assignment</h4>
      <input className="rounded border px-2 py-1" value={assignment.title ?? ""}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
      <label>
        <input type="checkbox" checked={assignment.completed ?? false}
          onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })} />
        Completed
      </label>
      <button type="button" className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        onClick={updateTitle}>Update Title</button>
      <pre>{JSON.stringify(assignment, null, 2)}</pre>
      <hr />
    </div>
  );
}
