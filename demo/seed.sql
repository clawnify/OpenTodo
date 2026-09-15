-- Fictional workspace records; loaded only in disposable demos.
INSERT INTO projects (id, name, description, status) VALUES
 (1, 'Client onboarding', 'Prepare a welcoming first week for a new client.', 'in_progress'),
 (2, 'Website refresh', 'Review the pages and collect launch feedback.', 'planned');
INSERT INTO labels (id, name, color) VALUES (1, 'Client experience', '#2563eb'), (2, 'Website', '#16a34a');
INSERT INTO issues (id, identifier, title, description, status, priority, project_id, sort_order) VALUES
 (1, 'TASK-1', 'Prepare the welcome checklist', 'List the information to collect before the kickoff meeting.', 'in_progress', 'high', 1, 0),
 (2, 'TASK-2', 'Schedule the kickoff meeting', 'Find a suitable time with the sample client team.', 'todo', 'medium', 1, 1),
 (3, 'TASK-3', 'Review the home page copy', 'Collect feedback on the draft introduction.', 'backlog', 'low', 2, 2);
INSERT INTO issue_labels VALUES (1, 1), (2, 1), (3, 2);
INSERT INTO comments (issue_id, content) VALUES (1, 'Start with the people, goals and documents needed for the first meeting.');
INSERT INTO _meta (key, value) VALUES ('issue_counter', '3'), ('identifier_prefix', 'TASK');
