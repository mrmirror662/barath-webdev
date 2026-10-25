import Link from "next/link";
import * as db from "../../../../database";

const field = "w-full rounded border border-neutral-300 px-3 py-2";
const row = "mb-4 grid grid-cols-[160px_1fr] items-start gap-3";
const label = "pt-2 text-right";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;
  const assignment = db.assignments.find((a) => a._id === aid);
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <label htmlFor="wd-name" className="mb-1 block">
        Assignment Name
      </label>
      <input id="wd-name" defaultValue={assignment?.title ?? ""} className={`${field} mb-4`} />
      <textarea
        id="wd-description"
        rows={5}
        className={`${field} mb-4`}
        defaultValue={assignment?.description ?? ""}
      />
      <div className={row}>
        <label htmlFor="wd-points" className={label}>Points</label>
        <input id="wd-points" defaultValue={assignment?.points ?? 100} className={field} />
      </div>
      <div className={row}>
        <label htmlFor="wd-group" className={label}>Assignment Group</label>
        <select id="wd-group" defaultValue="ASSIGNMENTS" className={field}>
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>
      <div className={row}>
        <label htmlFor="wd-display-grade-as" className={label}>Display Grade as</label>
        <select id="wd-display-grade-as" defaultValue="PERCENTAGE" className={field}>
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
          <option value="COMPLETE_INCOMPLETE">Complete/Incomplete</option>
        </select>
      </div>
      <div className={row}>
        <label htmlFor="wd-submission-type" className={label}>Submission Type</label>
        <div className="rounded border border-neutral-300 p-3">
          <select id="wd-submission-type" defaultValue="ONLINE" className={`${field} mb-3`}>
            <option value="ONLINE">Online</option>
            <option value="ON_PAPER">On Paper</option>
            <option value="NO_SUBMISSION">No Submission</option>
          </select>
          <div className="mb-2 font-semibold">Online Entry Options</div>
          <div>
            <input type="checkbox" id="wd-text-entry" className="me-2" />
            <label htmlFor="wd-text-entry">Text Entry</label>
          </div>
          <div>
            <input type="checkbox" id="wd-website-url" className="me-2" />
            <label htmlFor="wd-website-url">Website URL</label>
          </div>
          <div>
            <input type="checkbox" id="wd-media-recordings" className="me-2" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </div>
          <div>
            <input type="checkbox" id="wd-student-annotation" className="me-2" />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </div>
          <div>
            <input type="checkbox" id="wd-file-upload" className="me-2" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </div>
        </div>
      </div>
      <div className={row}>
        <span className={label}>Assign</span>
        <div className="rounded border border-neutral-300 p-3">
          <label htmlFor="wd-assign-to" className="mb-1 block font-semibold">Assign to</label>
          <input id="wd-assign-to" defaultValue="Everyone" className={`${field} mb-3`} />
          <label htmlFor="wd-due-date" className="mb-1 block font-semibold">Due</label>
          <input type="date" id="wd-due-date" defaultValue={assignment?.due} className={`${field} mb-3`} />
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="wd-available-from" className="mb-1 block font-semibold">
                Available from
              </label>
              <input type="date" id="wd-available-from" defaultValue={assignment?.available} className={field} />
            </div>
            <div>
              <label htmlFor="wd-available-until" className="mb-1 block font-semibold">
                Until
              </label>
              <input type="date" id="wd-available-until" defaultValue="2024-05-20" className={field} />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-3 py-2 text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-3 py-2 text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
