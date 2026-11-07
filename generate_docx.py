from docx import Document
from docx.shared import Pt, Inches
from docx.enum.text import WD_ALIGN_PARAGRAPH

def main():
    doc = Document()

    # Define styles
    style = doc.styles['Normal']
    font = style.font
    font.name = 'Calibri'
    font.size = Pt(11)

    # Header / Name
    name_para = doc.add_paragraph()
    name_run = name_para.add_run("MAX BALLARD")
    name_run.bold = True
    name_run.font.size = Pt(22)
    name_para.alignment = WD_ALIGN_PARAGRAPH.CENTER

    # Contact Info
    contact_para = doc.add_paragraph()
    contact_run = contact_para.add_run("Kansas City, MO / Open to Remote | ballardcmax@gmail.com | github.com/Champlin92")
    contact_para.alignment = WD_ALIGN_PARAGRAPH.CENTER

    doc.add_heading('EXECUTIVE SUMMARY', level=1)
    doc.add_paragraph(
        "IT Manager specializing in Infrastructure Operations, Enterprise Batch/EFT, and Proactive Observability. "
        "Proven track record of scaling high-availability support for 3,600+ North American retail stores, "
        "reclaiming 13,000+ labor hours annually, and driving 70% faster development through strategic AI enablement."
    )

    doc.add_heading('QUANTIFIABLE IMPACT & METRICS', level=1)
    metrics = [
        ("Retail Stores Supported: ", "3,600+ - Scaling high-availability infrastructure operations, POS ecosystems, and enterprise batch processing across North America."),
        ("Labor Hours Saved Annually: ", "13,000+ - Reclaimed across enterprise automation, self-healing workflows, and automated ServiceNow L3 ticket routing."),
        ("Dev Acceleration: ", "70% - Boosted script development speed by integrating Claude AI securely into engineering workflows."),
        ("AI & Python Upskilled: ", "100% - Guided the automation engineering team to complete both Google AI Professional and Python Automation certifications.")
    ]
    for bold_text, normal_text in metrics:
        p = doc.add_paragraph(style='List Bullet')
        p.add_run(bold_text).bold = True
        p.add_run(normal_text)

    doc.add_heading('PROFESSIONAL EXPERIENCE', level=1)

    # Role 1
    p_role1 = doc.add_paragraph()
    p_role1.add_run("IT Manager, InfraOps & Automation").bold = True
    p_role1.add_run("\nSally Beauty Holdings | Plano, TX (Remote) | March 2024 – Present").italic = True
    
    bullets1 = [
        ("Enterprise Scale: ", "Direct management of Automation, App Mgmt, and Batch operations for 3,600+ retail stores. Manage critical vendor relations (Fortra, Vinzant, PagerDuty)."),
        ("AI Enablement & Strategy: ", "Accelerated script development by 70% and streamlined reviews by integrating Claude AI. Directed enterprise architecture strategy, steering stakeholders toward low-cost deterministic automation over high-cost LLM deployments."),
        ("Proactive Observability ($420k/hr impact): ", "Architected a custom Python/Batch observability pipeline that auto-detects backend WebLogic failures, instantly routes alerts to L3 engineering, and autonomously suppresses downstream POS errors, completely preempting Sev-1 call waves."),
        ("Call Volume & Workflow Optimization: ", "Delivered 13,000+ labor hours saved annually across enterprise automation and self-healing workflows—including a ServiceNow pipeline that bypasses L1/L2 triage to automatically resolve/route 30+ daily POS errors and mitigate up to 375 hours of acute downtime during severity events."),
        ("Hands-On Technical Leadership: ", "Managed the diagnosis of a critical architecture failure in a business-critical enterprise fileshare, then led the technical management of the project to replace it—successfully improving performance and reducing operational risk. Guided the automation engineering team to achieve both Google Python Automation and Google AI Professional certifications.")
    ]
    for bold_text, normal_text in bullets1:
        p = doc.add_paragraph(style='List Bullet')
        p.add_run(bold_text).bold = True
        p.add_run(normal_text)

    # Role 2
    p_role2 = doc.add_paragraph()
    p_role2.add_run("Supervisor, Middleware Team").bold = True
    p_role2.add_run("\nSally Beauty Holdings | Plano, TX (Remote) | March 2023 – March 2024").italic = True
    
    bullets2 = [
        ("EFT Architecture Modernization: ", "Served as Technical Manager for the replacement and upgrade of a failing EFT system to a modern architecture and application version, stabilizing enterprise file transfers and eliminating legacy failure points."),
        ("Operational Leadership: ", "Managed daily operations, workload prioritization, and project delegation for the Middleware engineering team within Infrastructure Operations."),
        ("Incident Escalation Command: ", "Acted as primary escalation lead for complex engineering-level incidents across enterprise backend systems, integration tiers, and retail POS environments."),
        ("Cross-Functional Governance: ", "Partnered with application owners and platform leads to uphold system reliability, SLA adherence, and change governance.")
    ]
    for bold_text, normal_text in bullets2:
        p = doc.add_paragraph(style='List Bullet')
        p.add_run(bold_text).bold = True
        p.add_run(normal_text)

    # Role 3
    p_role3 = doc.add_paragraph()
    p_role3.add_run("Middleware Systems Engineer").bold = True
    p_role3.add_run("\nSally Beauty Holdings | Plano, TX (Remote) | February 2021 – March 2023").italic = True
    
    bullets3 = [
        ("Critical Enterprise Deployment & Recovery: ", "Stepped into a leadership vacuum following the sudden departure of the team lead to engineer a 6-node Oracle WebLogic cluster serving as the backbone for all POS systems. Salvaged a critical architecture upgrade during a 24-hour continuous window that risked a full rollback by manually editing and repairing configuration files corrupted during installation."),
        ("De-Siloed Critical EFT Operations: ", "Transitioned critical enterprise EFT and workload orchestration from a single point of failure into a resilient team discipline, writing comprehensive documentation and leading cross-training."),
        ("Knowledgebase Architecture: ", "Authored 55% of all technical knowledgebase articles and runbooks on a team of six engineers."),
        ("Service Desk Tooling: ", "Developed, maintained, and upgraded specialized troubleshooting toolsets empowering Service Desk Leads to resolve POS issues independently.")
    ]
    for bold_text, normal_text in bullets3:
        p = doc.add_paragraph(style='List Bullet')
        p.add_run(bold_text).bold = True
        p.add_run(normal_text)

    # Role 4
    p_role4 = doc.add_paragraph()
    p_role4.add_run("Service Desk Lead & Analyst").bold = True
    p_role4.add_run("\nSally Beauty Holdings | Plano, TX | February 2019 – February 2021").italic = True
    
    bullets4 = [
        ("Enterprise POS Transition & KB Ownership: ", "Served on the project team that transitioned retail POS systems from a legacy platform, authoring the entire technical knowledgebase for the new Oracle Xstore POS system."),
        ("Lead (2020–2021): ", "Led a multidisciplinary technical crew through COVID-era operations, serving as the high-severity incident commander. Authored foundational helpdesk training guides and troubleshooting standards."),
        ("Analyst (2019–2020): ", "Provided high-velocity rotational on-call and after-hours support, diagnosing and resolving complex hardware, software, and network connectivity incidents.")
    ]
    for bold_text, normal_text in bullets4:
        p = doc.add_paragraph(style='List Bullet')
        p.add_run(bold_text).bold = True
        p.add_run(normal_text)

    doc.add_heading('TECHNICAL SKILLS & COMPETENCIES', level=1)
    skills = [
        ("Scripting & Automation: ", "Python Automation (Advanced), Bash Shell (Proficient), PowerShell (Proficient), REST API Integrations (Proficient), SQL (Proficient)"),
        ("Infrastructure & Middleware: ", "Enterprise EFT & Workload Orchestration (Expert), Oracle WebLogic Cluster (Expert), Windows Server (Advanced), Red Hat Enterprise Linux (Proficient), Apache (Proficient)"),
        ("Observability & Operations: ", "Observability & Telemetry, Rundeck & Workflow Orchestration, Oracle Xstore POS Diagnostics, Dynamic Ticket Rerouting, Batch Job Scheduling")
    ]
    for bold_text, normal_text in skills:
        p = doc.add_paragraph(style='List Bullet')
        p.add_run(bold_text).bold = True
        p.add_run(normal_text)

    doc.add_heading('EDUCATION & CERTIFICATIONS', level=1)
    edu = [
        "Google AI Professional Certification",
        "Google IT Support Professional Certification",
        "Google IT Automation with Python (In Progress)",
        "ITIL 4 Foundation (In Progress)",
        "Undergraduate Studies in Anthropology – University of Wyoming",
        "Undergraduate Studies in Biology – University of Missouri–Kansas City"
    ]
    for e in edu:
        doc.add_paragraph(e, style='List Bullet')

    doc.save("Max_Ballard_Resume_Updated.docx")

if __name__ == "__main__":
    main()
