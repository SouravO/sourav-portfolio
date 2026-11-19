
# Universal AI Agent Development Protocol

## Purpose

This project may be developed using multiple AI coding agents, including Codex, Antigravity, and OpenCode.

All agents must preserve project knowledge, development progress, architectural decisions, and unfinished work through shared repository documentation.

The system must work for both new and existing projects.

## Rule 1 — Automatic Initialization

At the beginning of EVERY agent session:

1. Check whether `AGENTS.md` exists.
2. Check whether the `.ai/` directory exists.
3. Check for these files:
   - `.ai/PROJECT.md`
   - `.ai/ARCHITECTURE.md`
   - `.ai/TASKS.md`
   - `.ai/HANDOFF.md`
   - `.ai/DECISIONS.md`
   - `.ai/CHANGELOG.md`

4. If any file or directory is missing, create it automatically.
5. If this is a new project, initialize documents using the user's requirements and confirmed project information.
6. If this is an existing project, inspect its codebase, dependencies, Git history, and configuration before populating the documents.
7. Never invent completed functionality or unverified technical decisions.
8. Preserve existing documentation and user-authored content.

No additional user instruction is required to initialize missing documentation.

## Rule 2 — Session Startup

Before starting development:

1. Read the project memory documents.
2. Inspect relevant source code.
3. Check Git status and recent commits.
4. Identify completed and pending tasks.
5. Check for interrupted work.
6. Establish the current task and next action.

Treat source code and verified repository state as the authority when documentation is outdated.

## Rule 3 — Task Registration

Whenever the user requests development work:

1. Create or identify a task ID.
2. Register the task in `.ai/TASKS.md`.
3. Record its objective and acceptance criteria.
4. Set its status to `IN_PROGRESS`.
5. Start implementation.

## Rule 4 — Development Workflow

Follow this lifecycle for every task:

REGISTER → IMPLEMENT → VERIFY → UPDATE MEMORY → REPORT.

Do not report a task as fully complete before synchronizing memory.

For long-running tasks, update progress at meaningful milestones.

## Rule 5 — Automatic Memory Synchronization

After every completed, partially completed, or blocked task:

Update `TASKS.md`:
- Task ID and status.
- Completed implementation.
- Remaining work.
- Verification results.

Update `HANDOFF.md`:
- Current project state.
- Last completed task.
- Active or interrupted work.
- Files changed.
- Important implementation details.
- Known bugs and blockers.
- Next exact action.
- Git working-tree status.

Update `ARCHITECTURE.md` only when the technical architecture changes.

Update `DECISIONS.md` when a significant decision is made.

Update `CHANGELOG.md` for meaningful implementation changes.

Update `PROJECT.md` when product scope or requirements change.

Update `AGENTS.md` only when permanent development rules or coding conventions change.

Never put secrets, passwords, or API tokens into project memory files.

## Rule 6 — Automatic Handoff Readiness

The project must remain ready for another agent to continue at any time.

Do not wait until a context window or usage limit is nearly exhausted.

At the end of each meaningful milestone:

1. Verify completed work.
2. Synchronize relevant documentation.
3. Record unresolved issues.
4. Record the next immediate action.

If work is interrupted, the next agent must reconstruct the state from project files and Git.

## Rule 7 — Switching Agents

Whenever a new coding agent starts:

1. Read `AGENTS.md`.
2. Read `.ai/HANDOFF.md`.
3. Read `.ai/TASKS.md`.
4. Inspect the repository and Git status.
5. Verify the documented development state.
6. Continue the active task without duplicating completed work.

Do not overwrite unrelated changes from other agents.

## Rule 8 — Task Completion Conditions

A task can be marked DONE only when:

- Requested functionality is implemented.
- Acceptance criteria are satisfied.
- Relevant verification is performed.
- Known limitations are documented.
- TASKS.md is synchronized.
- HANDOFF.md is synchronized.

If verification fails or functionality is unfinished, use IN_PROGRESS or BLOCKED instead.

## Rule 9 — Git Safety

- Preserve existing user changes.
- Never reset or discard changes without permission.
- Do not automatically commit unless explicitly authorized.
- Recommend Git checkpoints after verified milestones.
- Use separate branches or worktrees for simultaneous development.

## Rule 10 — Response Format

After completing a task, briefly report:

1. What was implemented.
2. What was verified.
3. Whether any issues remain.
4. Confirmation that persistent project memory was updated.

Do not require the user to manually request documentation synchronization.

## Final Principle

Every coding agent must leave the repository in a state where another coding agent can understand the project, identify its current progress, and continue development without relying on previous chat history.
