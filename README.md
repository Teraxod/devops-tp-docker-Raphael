# devops-tp-docker-Raphael
Projet devops

# TP DevSecOps avec Docker

![Build and Scan](https://github.com/[username]/devops-tp-docker-[nom]/actions/workflows/docker-deploy.yml/badge.svg)
![CodeQL](https://github.com/[username]/devops-tp-docker-[nom]/actions/workflows/codeql-analysis.yml/badge.svg)

## Pipeline DevSecOps

Ce projet implémente un pipeline CI/CD sécurisé pour Docker avec :

- Analyse statique du code (CodeQL)
- Lint du Dockerfile (Hadolint)
- Scan de l'image Docker (Trivy)
- Scan des dépendances (Dependabot)
- Secret Scanning
- Security Gates (blocage sur vulnérabilités critiques)
- SBOM (Software Bill of Materials)

## Architecture de Sécurité

Code → SAST → Hadolint → Build → Trivy → Security Gates → GHCR


## Sécurité de l'Image

- Image de base : nginx:alpine (version spécifique)
- Utilisateur non-root
- Headers de sécurité renforcés
- Health checks
- Pas de secrets dans l'image

## Exécution Locale

```bash
docker pull ghcr.io/[username]/devops-tp-docker-[nom]:main
docker run -p 8080:8080 ghcr.io/[username]/devops-tp-docker-[nom]:main
Accéder à : http://localhost:8080

Scan de Sécurité Local
trivy image ghcr.io/[username]/devops-tp-docker-[nom]:main

---

## Résultats Attendus

À la fin de ce TP, vous devez avoir :

**Pipeline DevSecOps complet :**
- CodeQL pour l'analyse du code source
- Hadolint pour le lint du Dockerfile
- Trivy pour le scan des images
- Dependabot pour les dépendances
- Secret Scanning activé
- Security Gates fonctionnels

**Image Docker sécurisée :**
- Utilisateur non-root
- Image de base à jour
- Dépendances corrigées
- Headers de sécurité
- Pas de vulnérabilités HIGH/CRITICAL

**Visibilité :**
- Dashboard Security complet
- Alertes automatiques
- SBOM généré
- Badges dans README

---

## Commandes Trivy Avancées

```bash
# Scan d'un filesystem
trivy fs .

# Scan avec ignoré des unfixed
trivy image --ignore-unfixed nginx:alpine

# Scan de config Kubernetes
trivy config k8s-manifest.yaml

# Scan avec template personnalisé
trivy image --format template --template "@contrib/html.tpl" -o report.html nginx:alpine

# Liste des vulnérabilités par package
trivy image --list-all-pkgs nginx:alpine
