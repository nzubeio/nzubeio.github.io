# 🔐 Home SOC Lab Setup

> **Status:** 🔄 In Progress  
> **Author:** [Nzube Igweamaka](https://github.com/nzubeio)  
> **Focus:** Building a personal Security Operations Center environment from scratch

---

## 📋 Overview

This project documents the process of setting up a home SOC lab environment using free and open-source tools. The goal is to simulate a real-world SOC setup — with log ingestion, threat detection, and alerting — to build hands-on skills before entering a professional environment.

---

## 🎯 Goals

- [ ] Set up a virtualized network with attacker and defender machines
- [ ] Deploy a free SIEM (Splunk Free / Elastic Stack)
- [ ] Configure log forwarding from endpoints to SIEM
- [ ] Create basic detection rules and alerts
- [ ] Simulate attack scenarios and detect them

---

## 🛠️ Tools & Technology

| Tool | Purpose | Status |
|------|---------|--------|
| VirtualBox | Virtualization platform | ⏳ Setting up |
| Splunk Free / ELK | SIEM & log analysis | ⏳ Planned |
| Kali Linux | Attack simulation (red team) | ⏳ Planned |
| Ubuntu Server | Log source / endpoint | ⏳ Planned |
| Windows 10 VM | Windows log source | ⏳ Planned |
| Sysmon | Enhanced Windows logging | ⏳ Planned |

---

## 🏗️ Lab Architecture

```
┌─────────────────────────────────────────┐
│              HOME LAB NETWORK           │
│                                         │
│  ┌──────────┐       ┌──────────────┐    │
│  │ Kali     │──────▶│  Ubuntu /    │    │
│  │ (Attack) │       │  Windows VM  │    │
│  └──────────┘       └──────┬───────┘    │
│                            │ logs       │
│                     ┌──────▼───────┐    │
│                     │  Splunk SIEM │    │
│                     │  (Analyst)   │    │
│                     └──────────────┘    │
└─────────────────────────────────────────┘
```

---

## 📝 Setup Notes

> *Notes and steps will be added as the lab is built.*

### Phase 1: Virtualization Setup
- [ ] Download and install VirtualBox
- [ ] Create internal/host-only network adapter
- [ ] Download OS ISOs

### Phase 2: SIEM Deployment
- [ ] Install Splunk Free on Ubuntu
- [ ] Configure inputs.conf for log ingestion
- [ ] Test log forwarding

### Phase 3: Detection Rules
- [ ] Write SPL queries for failed logins
- [ ] Set up alerts for privilege escalation events
- [ ] Build a basic dashboard

---

## 📚 Resources Used

- [Splunk Free Documentation](https://docs.splunk.com)
- [TryHackMe SOC Level 1 Path](https://tryhackme.com/path/outline/soclevel1)
- [MyDFIR YouTube Channel](https://youtube.com) — SOC Analyst home lab guides

---

## 🔗 Related Projects

- [Log Analysis Lab](../log-analysis-lab)
- [Network Traffic Analysis](../network-traffic-analysis)
- [TryHackMe Writeups](../tryhackme-writeups)

---

*Part of my [cybersecurity portfolio](https://github.com/nzubeio) — documenting my journey to becoming a SOC Analyst.*
