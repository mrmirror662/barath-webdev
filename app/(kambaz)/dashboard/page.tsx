import CourseCard from "./CourseCard";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (3)</h2> <hr />
      <div id="wd-dashboard-courses">
        <CourseCard
          id="1234"
          title="CS1234 React JS"
          subtitle="Full Stack software developer"
          image="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/250px-React-icon.svg.png"
        />
        <CourseCard
          id="2345"
          title="CS2345 Node JS"
          subtitle="Server side JavaScript"
          image="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/250px-Node.js_logo.svg.png"
        />
        <CourseCard
          id="3456"
          title="CS3456 MongoDB"
          subtitle="NoSQL Databases"
          image="https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/250px-MongoDB_Logo.svg.png"
        />
      </div>
    </div>
  );
}
