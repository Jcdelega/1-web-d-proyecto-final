# 🛰️ Space Missions Dashboard
## Project Overview

This project is a **Single Page Application (SPA)** that serves as the **control dashboard for a space pilot**. Its main objective is to provide a centralized, immersive, and highly functional interface for managing the mission event log.  

The design blends three core aesthetics:  
- **High-tech cockpit controls**  
- **Retro analog radar essence**  
- **Clear and modern HUD (Head-Up Display)**  

The SPA delivers a complete mission tool where critical information is always available, and the interface feels like a natural extension of the spacecraft. Its single-page architecture ensures smooth transitions between screens, allowing the pilot to stay fully focused on the mission without distractions.  

---

## Project Principal Sections

### 🖥️ Pilot Dashboard (Main Panel)
- **Function:** Acts as the home screen of the SPA, dynamically displaying critical spacecraft data.  
- **Features:** Interactive distance and fuel gauges, real-time ship status indicator, mission control buttons (Takeoff / Landing), and a panel for managing visited planets.  

---

### 🔑 Login / Registration Screen
- **Function:** Serves as the entry point to the application. While the dashboard can be viewed, mission protocols require proper login or registration.  
- **Features:** A secure, mission-themed authentication form designed to immerse the user in the experience of an astronaut starting a mission protocol.  

---

### 📜 Black Box Event Log
- **Function:** Provides a detailed mission event log, accessible from both the SPA and the user profile.  
- **Features:** A "log card" system that enables pilots to record and review events by date, location, and type.  

---

## 🎨 Design Considerations (UI/UX)

- **Color Palette:** Dark tones representing the space environment, with neon accents (light blue, orange, purple) for optimal data visibility.  
- **Typography:** A strategic mix of futuristic "HUD-style" fonts for headings and monospaced fonts for improved text legibility, ensuring a coherent visual identity.  

## Project Resources

### 🔗 Jira Dashboard  
[![Jira](https://img.shields.io/badge/Jira-Dashboard-0052CC?style=for-the-badge&logo=jira&logoColor=white)](https://jcdlega-1755213341901.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog?atlOrigin=eyJpIjoiZDRjZTVlZmQ1MDBkNDU3YmE3YTBmYjIzMTE4YmMxZDYiLCJwIjoiaiJ9)

Track the project workflow, tasks, and progress through the Jira Dashboard.

---

### 🎨 Figma Mockups & Inception  
[![Figma](https://img.shields.io/badge/Figma-Mockups-FF7262?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/design/YMtw0vzrc0hYJftkCh6qmr/Space-Missions-Dashboard?node-id=16-53&t=aMuhSFetSHMg3LNa-1)

View the wireframes, mockups, and inception documents that guided the design process.


## Conventions, Agreements and Good Practices

**SPA with MERN Stack**

---

### 1. Branching Model  

We will follow a **simplified Git Flow model**, adapted to the needs of an agile team and the development of a Single Page Application (SPA). This ensures a stable environment at all times while keeping new features and fixes well-organized.  

- **`main`**: Represents the production-ready branch. It must always remain stable and deployable.  
  - 🚫 No direct pushes are allowed.  
  - ✅ All changes must arrive via Pull Requests (PRs) from `develop`.  

- **`develop`**: The main integration branch for ongoing development.  
  - All new features are merged here.  
  - Must remain in a **"deployable state"** at all times, even if not in production.  

- **`feature/[feature-name]`**: For each new functionality or backlog issue, create a branch from `develop`.  
  - Use descriptive, concise names (e.g., `feature/user-login`, `feature/spaceship-dashboard`).  
  - Once complete, open a PR into `develop`.  

- **`bugfix/[bug-name]`**: For hotfixes or production bug corrections, create a branch from `main`.  
  - After fixing, open a PR into both `main` and `develop` to keep them aligned.  

- **Pull Requests (PRs)**:  
  - Titles must be clear and describe the purpose of the merge.  
  - Descriptions should summarize the changes, reference any related issues, and include notes for reviewers.  

---

### 2. Workflow  

1. **Branch Creation**  
   Before starting work on an issue, create a branch from `develop`:  

   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/feature-name

2. **Regular Updates**  
    Frequently sync with develop to avoid large conflicts:

    ```bash
    git pull origin develop --rebase
3. **Pull Request (PR)**   

    -Push your branch to GitHub once the feature is complete and locally tested.
    -Open a PR into `develop`.    
    -Resolve any conflicts before opening the PR.
4. **Code Review**  
    -At least one team member must review every PR
    -Address feedback promptly  
    -Once approbed the PR can be merged

6. **Deployment**   
    -The DevOps team or project lead is responsible for merging develop into main for production deployments.
---
### 3. Additional Best Practices

- Use Rebase for Clean History

    - Prefer `git pull --rebase` to keep commit history linear and avoid unnecessary merge commits.

- No Direct Merges

    - Never merge branches directly into `main` or `develop` without a PR.

- Clean Commit History

    - If needed, use `git commit --amend` to fix your last commit.

    - Use `git rebase -i` to tidy up your commit history before pushing.

- `.gitignore` Hygiene

    - Ensure .gitignore excludes unnecessary files such as:

        - node_modules/

        - .env

        - IDE configs and environment-specific files.
---
### 4. Commits

Make atomic, meaningful commits (one logical change per commit).

Do not mix unrelated changes in the same commit

| Type        | Description |
|-------------|-------------|
| **✨ feat**  | When a new feature is added. |
| **🐛 fix**   | When a bug is fixed. |
| **🧹 chore** | Routine tasks that are not specific to a feature or bug, such as adding content to the `.gitignore` file or installing a dependency. |
| **🧪 test**  | When we add or fix tests. |
| **📝 docs**  | When only documentation is modified. |
| **🏗️ build** | When the change affects the project's build. |
| **⚙️ ci**    | The change affects configuration files and scripts related to continuous integration. |
| **🎨 style** | Readability or code formatting changes that do not affect functionality. |
| **♻️ refactor** | A code change that does not fix bugs or add functionality, but improves the code. |
| **⚡ perf**  | Used for performance improvements. |
| **⏪ revert**| If the commit reverts a previous commit. The hash of the commit being reverted should be indicated. |
### Examples

```bash
git commit -m "feat: Add dark mode toggle to the navigation bar"
git commit -m "fix: Resolve issue where login form validation failed on mobile devices"


