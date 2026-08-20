/**
 * MAX BALLARD RESUME WEBSITE — INTERACTIVE LOGIC & CYBERDECK CLI TERMINAL
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initPrintTrigger();
  initTerminal();
  initKeyboardShortcuts();
});

/* ==========================================================================
   1. NAVBAR SCROLL EFFECT
   ========================================================================== */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.style.background = 'rgba(9, 13, 20, 0.95)';
      navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.4)';
    } else {
      navbar.style.background = 'rgba(9, 13, 20, 0.85)';
      navbar.style.boxShadow = 'none';
    }
  });
}

/* ==========================================================================
   2. PRINT / PDF TRIGGER
   ========================================================================== */
function initPrintTrigger() {
  const printBtn = document.getElementById('printResumeBtn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

/* ==========================================================================
   3. COPY EMAIL TO CLIPBOARD WITH TOAST
   ========================================================================== */
function copyEmail() {
  const email = 'ballardcmax@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    showToast('✓ Email copied to clipboard: ' + email);
    const copyBtnText = document.getElementById('copyBtnText');
    if (copyBtnText) {
      const original = copyBtnText.textContent;
      copyBtnText.textContent = 'Copied to Clipboard!';
      setTimeout(() => {
        copyBtnText.textContent = original;
      }, 2500);
    }
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/* ==========================================================================
   4. INTERACTIVE CYBERDECK CLI TERMINAL
   ========================================================================== */
let terminalOpen = false;
const commandHistory = [];
let historyIndex = -1;

const CLI_COMMANDS = {
  help: `Available Matrix Commands:
  - skills       : Inspect technical mastery & tooling matrix
  - metrics      : View high-impact quantifiable performance stats
  - experience   : Review career history at Sally Beauty Holdings
  - philosophy   : Read core engineering & leadership philosophy
  - education    : View degrees and professional certifications
  - contact      : Display direct contact channels & links
  - print        : Trigger clean ATS-friendly print/PDF export
  - matrix       : Run digital matrix cascade
  - clear        : Clear terminal output
  - exit         : Close terminal modal`,

  skills: `=== TECHNICAL COMPETENCY MATRIX ===
[Scripting & Automation]
  • Python (Advanced - Team Uplift Leader)
  • Bash / POSIX Shell (Advanced)
  • PowerShell & Automation Scripting (Proficient)
  • REST API Integrations (Advanced)
  • Oracle SQL & Query Tuning (Proficient)

[Infrastructure & Middleware]
  • Globalscape EFT & Batch Operations (Expert)
  • Oracle WebLogic Cluster (Advanced - 24hr deployment veteran)
  • Red Hat Enterprise Linux (RHEL) (Advanced)
  • Apache HTTP & Web Tiers (Advanced)
  • Windows Server & Microsoft Azure (Proficient)

[Observability & Incident Operations]
  • Dynatrace Observability Telemetry (Advanced)
  • Rundeck Orchestration (Advanced)
  • Oracle Xstore POS Diagnostics (Expert - 3600+ stores)
  • Dynamic Ticket Rerouting (30% call reduction)

[Leadership & Strategy]
  • AI Readiness & Evaluation Frameworks
  • Talent Upskilling (100% team Python certification)
  • Knowledgebase Architecture (Authored 55% of team KB)
  • ITIL Service Management (In Progress)`,

  metrics: `=== QUANTIFIABLE IMPACT METRICS ===
  [ $420k/hr ] Revenue Protected via Custom Python Observability Pipelines
  [  1,300+  ] Labor Hours Saved Annually via ServiceNow L3 Auto-Routing
  [   70%    ] Dev Acceleration by securely integrating Claude AI workflows
  [  3,600+  ] North American Retail Stores & Backend Systems Supported`,

  experience: `=== CAREER PROGRESSION @ SALLY BEAUTY HOLDINGS ===
1. [Mar 2024 - Present] IT Manager, InfraOps & Automation
   • Built auto-healing pipeline saving 1,300+ hrs/yr & bypassing L1/L2 triage.
   • Architected observability protecting $420k/hr during WebLogic outages.
   • Steered enterprise AI strategy, accelerating script dev by 70% with Claude.

2. [Mar 2023 - Mar 2024] Supervisor, Middleware Team
   • Directed daily ops, project delegation, and high-severity incident escalation.

3. [Feb 2021 - Mar 2023] Middleware Systems Engineer
   • Salvaged critical 6-node WebLogic cluster rollout during 24-hr deployment.
   • De-siloed Globalscape EFT; authored 55% of team technical knowledgebase.

4. [Feb 2019 - Feb 2021] Service Desk Lead & Analyst
   • Led tech crew through COVID operations; established foundational training.`,

  philosophy: `=== LEADERSHIP & ENGINEERING PHILOSOPHY ===
"I lead by going first. With extensive hands-on experience and a proven
track record of uplifting teams through mentorship and systematic knowledgebase
management, I build an engine of continual improvement and consistency that
delivers service excellence."
                                                     — Max Ballard`,

  education: `=== EDUCATION & CERTIFICATIONS ===
[Certifications]
  • Google AI Professional Certification
  • Google IT Support Professional Certification
  • ITIL 4 Foundation (In Progress)

[Academic Background]
  • Undergraduate Studies in Anthropology — University of Wyoming
  • Undergraduate Studies in Biology — University of Missouri–Kansas City
  * Strategically pivoted to accelerate a dedicated career in Enterprise IT.`,

  contact: `=== CONTACT CHANNELS ===
  • Email    : ballardcmax@gmail.com
  • LinkedIn : https://www.linkedin.com/in/max-ballard-0126b111a/
  • GitHub   : https://github.com/Champlin92
  • Location : Kansas City, MO (Open to Remote or Hybrid)`
};

function initTerminal() {
  const toggleBtn = document.getElementById('terminalToggleBtn');
  const termInput = document.getElementById('termInput');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleTerminal);
  }

  if (termInput) {
    termInput.addEventListener('keydown', handleTerminalKey);
  }
}

function toggleTerminal() {
  const modal = document.getElementById('terminalModal');
  const input = document.getElementById('termInput');
  terminalOpen = !terminalOpen;

  if (terminalOpen) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    setTimeout(() => input.focus(), 100);
  } else {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
}

function closeTerminal() {
  terminalOpen = false;
  const modal = document.getElementById('terminalModal');
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
}

function openTerminalWith(command) {
  if (!terminalOpen) toggleTerminal();
  const input = document.getElementById('termInput');
  input.value = command;
  executeCommand(command);
  input.value = '';
}

function handleTerminalKey(e) {
  const input = document.getElementById('termInput');

  if (e.key === 'Enter') {
    const rawVal = input.value.trim();
    if (rawVal) {
      commandHistory.push(rawVal);
      historyIndex = commandHistory.length;
      executeCommand(rawVal);
      input.value = '';
    }
  } else if (e.key === 'ArrowUp') {
    if (historyIndex > 0) {
      historyIndex--;
      input.value = commandHistory[historyIndex];
    }
    e.preventDefault();
  } else if (e.key === 'ArrowDown') {
    if (historyIndex < commandHistory.length - 1) {
      historyIndex++;
      input.value = commandHistory[historyIndex];
    } else {
      historyIndex = commandHistory.length;
      input.value = '';
    }
    e.preventDefault();
  } else if (e.key === 'Escape') {
    closeTerminal();
  }
}

function executeCommand(rawCmd) {
  const historyDiv = document.getElementById('termHistory');
  const screen = document.getElementById('terminalScreen');
  const cmd = rawCmd.toLowerCase().trim();

  // Create command echo
  const line = document.createElement('div');
  line.innerHTML = `<span class="term-prompt">max@ono-sendai:~$</span> <span class="term-cmd">${escapeHTML(rawCmd)}</span>`;
  historyDiv.appendChild(line);

  // Process command
  const output = document.createElement('div');
  output.className = 'term-output';

  if (cmd === 'clear') {
    historyDiv.innerHTML = '';
    return;
  } else if (cmd === 'exit' || cmd === 'quit') {
    closeTerminal();
    return;
  } else if (cmd === 'print' || cmd === 'pdf') {
    output.textContent = 'Triggering browser print engine for ATS resume output...';
    setTimeout(() => window.print(), 300);
  } else if (cmd === 'matrix') {
    output.textContent = '01001101 01000001 01011000 00100000 01000010 01000001 01001100 01001100 01000001 01010010 01000100\n[+] Jacked into Sally Beauty InfraOps Matrix. Systems: 3,600+ online. Status: 100% OPERATIONAL.';
  } else if (CLI_COMMANDS[cmd]) {
    output.textContent = CLI_COMMANDS[cmd];
  } else if (cmd === 'whoami') {
    output.textContent = 'guest_recruiter@terminal (Authorized Access Granted)';
  } else if (cmd === 'date' || cmd === 'uptime') {
    output.textContent = `Current Telemetry Time: ${new Date().toUTCString()}\nSystem Status: 99.999% Uptime across 3,600+ Retail Nodes`;
  } else {
    output.textContent = `Command not recognized: '${escapeHTML(rawCmd)}'. Type 'help' to see valid commands.`;
  }

  historyDiv.appendChild(output);
  screen.scrollTop = screen.scrollHeight;
}

function escapeHTML(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ==========================================================================
   5. KEYBOARD SHORTCUTS
   ========================================================================== */
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Backtick or Ctrl+K opens/closes terminal
    if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      toggleTerminal();
    } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      toggleTerminal();
    }
  });
}
