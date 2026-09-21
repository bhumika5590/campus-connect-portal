import { useState } from 'react';

export default function StudentPortal({ onBackToHome }) {
  // TODO 1: Active tab state
  const [activeTab, setActiveTab] = useState('notices');

  // TODO 2: Assignments state
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      subject: 'CS3301 - Full Stack',
      title: 'Lab Assignment 2: React State',
      status: 'Pending',
      dueDate: 'Sept 15, 2026'
    },
    {
      id: 2,
      subject: 'CS3302 - DBMS',
      title: 'ER Diagram Project Report',
      status: 'Submitted',
      dueDate: 'Sept 01, 2026'
    }
  ]);

  const notices = [
    {
      id: 1,
      title: 'Mid-Term Exam Schedule Released',
      date: 'Sept 10, 2026',
      dept: 'SOCSE'
    },
    {
      id: 2,
      title: 'Hackathon Registration Open',
      date: 'Sept 20, 2026',
      dept: 'RVU Tech Club'
    }
  ];

  // TODO 3: Assignment submission handler
  const handleAssignmentSubmit = (id) => {
    setAssignments((prevAssignments) =>
      prevAssignments.map((assignment) =>
        assignment.id === id
          ? { ...assignment, status: 'Submitted' }
          : assignment
      )
    );
  };

  return (
    <div style={styles.container}>

      {/* Top Header Navigation */}
      <header style={styles.header}>
        <div>
          <h2 style={{ margin: 0, color: '#F2A900' }}>
            👨‍🎓 Student Portal View
          </h2>

          <span style={{ fontSize: '13px', color: '#e0e0e0' }}>
            Welcome, RVU Student
          </span>
        </div>

        <button onClick={onBackToHome} style={styles.backBtn}>
          ← Back to Main Campus View
        </button>
      </header>

      {/* Portal Tab Navigation */}
      <div style={styles.tabContainer}>

        <button
          onClick={() => setActiveTab('notices')}
          style={activeTab === 'notices' ? styles.activeTab : styles.tab}
        >
          Notices & Events
        </button>

        <button
          onClick={() => setActiveTab('assignments')}
          style={activeTab === 'assignments' ? styles.activeTab : styles.tab}
        >
          Assignments
        </button>

        <button
          onClick={() => setActiveTab('attendance')}
          style={activeTab === 'attendance' ? styles.activeTab : styles.tab}
        >
          Track Attendance
        </button>

        <button
          onClick={() => setActiveTab('profile')}
          style={activeTab === 'profile' ? styles.activeTab : styles.tab}
        >
          Profile
        </button>

      </div>

      {/* Main Feature Content Area */}
      <div style={styles.contentCard}>

        {/* SECTION 1: NOTICES */}
        {activeTab === 'notices' && (
          <div>
            <h3>📢 Campus Notices & Events</h3>

            <ul style={styles.list}>
              {notices.map((item) => (
                <li key={item.id} style={styles.listItem}>
                  <div>
                    <strong>{item.title}</strong>

                    <p style={styles.subText}>
                      {item.dept} • {item.date}
                    </p>
                  </div>

                  <button style={styles.actionBtn}>
                    View Details
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* SECTION 2: ASSIGNMENTS */}
        {activeTab === 'assignments' && (
          <div>
            <h3>📝 Assignments</h3>

            <ul style={styles.list}>
              {assignments.map((assignment) => (
                <li key={assignment.id} style={styles.listItem}>
                  <div>
                    <strong>{assignment.title}</strong>

                    <p style={styles.subText}>
                      {assignment.subject} • Due: {assignment.dueDate}
                    </p>
                  </div>

                  <div style={styles.assignmentAction}>

                    <span
                      style={
                        assignment.status === 'Submitted'
                          ? styles.badgeSuccess
                          : styles.badgePending
                      }
                    >
                      {assignment.status}
                    </span>

                    {assignment.status === 'Pending' && (
                      <button
                        onClick={() =>
                          handleAssignmentSubmit(assignment.id)
                        }
                        style={styles.actionBtn}
                      >
                        Submit
                      </button>
                    )}

                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* SECTION 3: ATTENDANCE */}
        {activeTab === 'attendance' && (
          <div>
            <h3>📊 Track Attendance</h3>

            <div style={styles.attendanceGrid}>

              <div style={styles.attendanceCard}>
                <h4>CS3301 - Full Stack</h4>
                <p style={styles.attendancePercentage}>92%</p>
                <span>Good Attendance</span>
              </div>

              <div style={styles.attendanceCard}>
                <h4>CS3302 - DBMS</h4>
                <p style={styles.attendancePercentage}>87%</p>
                <span>Good Attendance</span>
              </div>

              <div style={styles.attendanceCard}>
                <h4>CS3303 - Cloud Computing</h4>
                <p style={styles.attendancePercentage}>81%</p>
                <span>Good Attendance</span>
              </div>

              <div style={styles.attendanceCard}>
                <h4>CS3304 - Data Science</h4>
                <p style={styles.attendancePercentage}>76%</p>
                <span>Attendance Warning</span>
              </div>

            </div>
          </div>
        )}

        {/* SECTION 4: PROFILE */}
        {activeTab === 'profile' && (
          <div>
            <h3>👤 Student Profile</h3>

            <div style={styles.profileCard}>
              <div>
                <strong>Name</strong>
                <p style={styles.subText}>RVU Student</p>
              </div>

              <div>
                <strong>Student ID</strong>
                <p style={styles.subText}>RVU2026CS001</p>
              </div>

              <div>
                <strong>Programme</strong>
                <p style={styles.subText}>
                  B.Sc. (Hons) Cloud Computing
                </p>
              </div>

              <div>
                <strong>Semester</strong>
                <p style={styles.subText}>Semester 4</p>
              </div>

              <div>
                <strong>School</strong>
                <p style={styles.subText}>
                  School of Computer Science and Engineering
                </p>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}

// RV University Styling Palette (Unchanged)
const styles = {
  container: {
    maxWidth: '850px',
    margin: '30px auto',
    fontFamily: 'Arial, sans-serif'
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0A2240',
    padding: '15px 20px',
    borderRadius: '8px 8px 0 0',
    color: '#fff'
  },

  backBtn: {
    backgroundColor: '#F2A900',
    border: 'none',
    padding: '8px 14px',
    fontWeight: 'bold',
    borderRadius: '4px',
    cursor: 'pointer',
    color: '#0A2240'
  },

  tabContainer: {
    display: 'flex',
    backgroundColor: '#e0e0e0',
    borderBottom: '2px solid #0A2240'
  },

  tab: {
    flex: 1,
    padding: '12px',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#333'
  },

  activeTab: {
    flex: 1,
    padding: '12px',
    border: 'none',
    backgroundColor: '#ffffff',
    color: '#0A2240',
    fontWeight: 'bold',
    borderTop: '3px solid #0A2240',
    cursor: 'pointer'
  },

  contentCard: {
    backgroundColor: '#ffffff',
    padding: '25px',
    borderRadius: '0 0 8px 8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },

  list: {
    listStyle: 'none',
    padding: 0
  },

  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px',
    borderBottom: '1px solid #eee'
  },

  subText: {
    margin: '4px 0 0 0',
    fontSize: '12px',
    color: '#666'
  },

  actionBtn: {
    backgroundColor: '#0A2240',
    color: '#fff',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer'
  },

  badgeSuccess: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px'
  },

  badgePending: {
    backgroundColor: '#ffc107',
    color: '#000',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px'
  },

  assignmentAction: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },

  attendanceGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '15px'
  },

  attendanceCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    textAlign: 'center'
  },

  attendancePercentage: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#0A2240',
    margin: '10px 0'
  },

  profileCard: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px'
  }
};