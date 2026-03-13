import html from "../../public/stack/html.png";
import css from "../../public/stack/css.png";
import js from "../../public/stack/js.png";
import ts from "../../public/stack/ts.png";
import solidity from "../../public/stack/solidity.png";
import python from "../../public/stack/python.png";
import react from "../../public/stack/react.png";
import nextjs from "../../public/stack/nextjs.jpeg";
import tailwind from "../../public/stack/tailwindcss.png";
import nodejs from "../../public/stack/nodejs.png";
import serverless from "../../public/stack/serverless.png";
import nest from "../../public/stack/nest.png";
import mongodb from "../../public/stack/mongodb.png";
import mysql from "../../public/stack/mysql.png";
import postgresql from "../../public/stack/postgresql.png";
import aurora from "../../public/stack/aurora.png";
import sequelize from "../../public/stack/sequelize.png";
import prisma from "../../public/stack/prisma.svg";
import hardhat from "../../public/stack/hardhat.jpeg";
import openzeppelin from "../../public/stack/openzeppelin.png";
import web3js from "../../public/stack/web3js.jpeg";
import ethers from "../../public/stack/ethers.png";
import thirdweb from "../../public/stack/thirdweb.png";
import infura from "../../public/stack/infura.png";
import alchemy from "../../public/stack/alchemy.jpeg";
import aws from "../../public/stack/aws.png";
import azure from "../../public/stack/azure.png";
import jenkins from "../../public/stack/jenkins.png";
import docker from "../../public/stack/docker.png";
import terraform from "../../public/stack/terraform.png";
import ansible from "../../public/stack/ansible.png";
import elastic from "../../public/stack/elastic.png";
import grafana from "../../public/stack/grafana.png";
export const events = [
  {
    name: "EthRio 2022",
    date: "2022",
    organizer: "Ethereum Brasil",
    description: "A convergence of creators, builders & thinkers",
    photoUrl: "/eth22.jpeg",
  },
  {
    name: "DEVConnect Amsterdam",
    date: "2022",
    organizer: "Ethereum Foundation",
    description:
      "Ethereum community hosted independent events and workshops and held in-depth discussions on topics such as Ethereum staking, Layer 2s, web3 UX, and MEV",
    photoUrl: "/devcon3.jpeg",
  },
  {
    name: "EthRio 2023",
    date: "2023",
    organizer: "Ethereum Brasil",
    description: "A convergence of creators, builders & thinkers",
    photoUrl: "/ethrio23.jpeg",
  },
  {
    name: "WebSummit Rio",
    date: "2023",
    organizer: "WebSummit",
    description: "The largest technology event in the world",
    photoUrl: "/websummitRio.jpeg",
  },
  {
    name: "Blockchain festival São Paulo",
    date: "2023",
    organizer: "Blockchain Festival",
    description:
      "Blockchain SP Festival emerges as a new landmark in the Latin American innovation and technology scene",
    photoUrl: "/blockchainSP.jpeg",
  },
  {
    name: "Pragma New York",
    date: "2023",
    organizer: "ETHGlobal",
    description:
      "ETHGlobal Pragma is an in-person summit for builders and leaders in the web3 ecosystem",
    photoUrl: "/ethNUC-Pragma.jpeg",
  },
  {
    name: "ETHGlobal New York",
    date: "2023",
    organizer: "ETHGlobal",
    description:
      "ETHGlobal New York is an event bringing together some of the top minds and experts in Ethereum Ecosystem to New York",
    photoUrl: "/ethnyc.jpeg",
  },
  {
    name: "ETHGlobal London",
    date: "2024",
    organizer: "ETHGlobal",
    description:
      "ETHGlobal London is an event bringing together some of the top minds and experts in Ethereum Ecosystem to London",
    photoUrl: "/ethlondon.png",
  },
  {
    name: "ETHGlobal San Francisco",
    date: "2024",
    organizer: "ETHGlobal",
    description:
      "ETHGlobal San Francisco is an event bringing together some of the top minds and experts in Ethereum Ecosystem to San Francisco",
    photoUrl: "/ethSFO.jpeg",
  },
];

export const Projects = [
  {
    title: "Balão Revelação (BabyPool)",
    description:
      "Gender reveal betting platform. MVP generated R$1,200+ in revenue with 50+ bets in the first round. Built and validated with real users.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    link: "https://github.com/ffelipesimoes/git-gbaby-gender-prediction",
  },
  {
    title: "Orça Comigo",
    description:
      "Finance management app for couples. R$280,000+ managed across 1,100+ transactions by real users.",
    tags: ["React", "Next.js", "Node.js", "TypeScript"],
    link: "#",
  },
  {
    title: "Serverless Ecommerce API with AWS",
    description:
      "An e-commerce application designed to be deployed in the AWS cloud environment using serverless architecture.",
    tags: ["Serverless", "TypeScript", "AWS CDK", "Node.js"],
    link: "https://github.com/ffelipesimoes/nodejs-aws-serverless-ecommerce",
  },
  {
    title: "IaC - Deploy Infrastructure with AWS",
    description:
      "Cloud environment deployment with bastion servers and EC2 instances using Terraform and Infrastructure as Code.",
    tags: ["AWS", "Terraform", "Infrastructure-as-Code"],
    link: "https://github.com/ffelipesimoes/terraform-bastionHost-ec2-aws",
  },
  {
    title: "NFTFact - A backend for NFT factory",
    description: "A factory for creating and deploying NFT contracts at scale.",
    tags: ["Solidity", "TypeScript", "NestJS", "Hardhat"],
    link: "https://github.com/ffelipesimoes/nft-factory-api-nest-hardhat",
  },
];

export const certifications = [
  {
    name: "Blockchain Programável para negócios: Solidity",
    date: "2022",
    issuer: "IAG PUC-RIO",
  },
  {
    name: "Corda Certified Developer",
    date: "2019",
    issuer: "R3",
  },
  {
    name: "VMware Certified Professional 6 - Data Center Virtualization",
    date: "2016",
    issuer: "VMware",
  },
  {
    name: "MS: Server Virtualization with Windows Server Hyper-V and System Center",
    date: "2016",
    issuer: "Microsoft",
  },
  {
    name: "ITIL® Foundation Certificate in IT Service Management",
    date: "2014",
    issuer: "AXELOS Global Best Practice",
  },
  {
    name: "MCITP: Enterprise Administrator on Windows Server 2008",
    date: "2011",
    issuer: "Microsoft",
  },
];

export const educationData = [
  {
    period: "2019 - 2020",
    title: "MBA in Blockchain Applications",
    institution: "Instituto de Gerenciamento de Tecnologia da Informação",
    description:
      "Advanced studies in distributed systems and financial technology, focusing on decentralized architectures, DApp development, and blockchain integration for fintech applications.",
  },
  {
    period: "2017 - 2018",
    title: "English Language and Literature, General Studies",
    institution: "Cork English Academy",
    description:
      "Enhancing language proficiency through immersive English studies and cultural exchange in Ireland for one year.",
  },
  {
    period: "2009 - 2013",
    title: "Diploma in Computer Network",
    institution: "Faculdade Evolução",
    description:
      "Exploring and implementing advanced computer networking solutions to enable effective communication and data management systems.",
  },
  {
    period: "2007 - 2008",
    title: "Web Development",
    institution:
      "Escola Técnica Tupy – Sociedade Educacional De Santa Catarina (SC)",
    description:
      "Administration of local networks; Programming for WEB / PHP and HTML; Software Development;",
  },
];

export const volunteeringData = [
  {
    period: "2021 - 2022",
    title: "Volunteer Staff",
    institution: "CryptoJr",
    description:
      "1st and largest student-led organization in LatAm to provide consulting services for web3 projects.",
    photo: "/cryptojr.png",
  },
  {
    period: "2022",
    title: "Staff",
    institution: "Ethereum Foundation",
    description:
      "I Attended as volunteer on the Devconnect Amsterdam(18-24/04).",
    photo: "/devconnect.jpeg",
  },
  {
    period: "2022",
    title: " Staff",
    institution: "EthGlobal",
    description:
      "Attending as volunteer on Ethereum Hackathon in Amsterdam(ETHAmsterdam).",
    photo: "/devconnect3.jpeg",
  },
  {
    period: "2023",
    title: "Teacher",
    institution: "Fundação Amiguinhos de Jesus",
    description:
      "We are a place of love and welcome where we base values ​​and principles on the reality of families in our local community, through education, training, sport and culture for the full exercise of citizenship",
    photo: "/amiguinhos.jpeg",
  },
];

export const workData = [
  {
    period: "Jun 2024 - Present",
    title: "Lead Software Engineer",
    institution: "Ether Global Assets",
    description: `
      • Led the design and rollout of API V2, replacing BullMQ with AWS SQS, achieving 99.9% uptime and improving queue reliability without additional costs.
      • Implemented authentication via Amazon Cognito with OAuth2 and MFA, resulting in zero security incidents. Introduced an OAuth2-based API key system aligned with financial industry standards.
      • Re-architected the PIX payment infrastructure, which processes over 70% of company revenue — handling over 8 million BRL in transactions in just 90 days.
      • Designed a flexible fee system with unlimited configurations for system, managers, and tenants — now generating over 200,000 BRL in total revenue.
      • Built an automated withdrawal system for tenants — over 200,000 BRL processed — eliminating manual payout delays.
      • Scaled the engineering team 2x and introduced agile practices, accelerating delivery cycles by 40% and increasing strategic output by 85%.
    `,
    photo: "/babyPool.jpeg",
  },
  {
    period: "Mar 2024 - Jun 2024 ",
    title: "Software Engineer",
    institution: "Ether Private Bank",
    description:
      "Joined as the first senior developer. Built the entire technical stack from scratch: front-end, back-end, DevOps, and cloud. Progressed to Tech Lead, now leading the engineering team and driving AI adoption across all workflows. • Enterprise-grade security with Amazon Cognito, OAuth2 and MFA. Zero security incidents post-launch. • Re-architected PIX payment system (70% of revenue), handling 8M+ BRL in transactions in 90 days. • Automated payouts: 200K+ BRL processed, reducing manual operations from days to minutes. • Scaled the development team by 2x with CI/CD and agile. • AI Engineering: code reviews from 1h to 15min per PR, feature delivery 4x faster (30d to 7d), incident resolution from 3h+ to 30min. Cursor as team-wide AI coding assistant.",
    photo: "/babyPool.jpeg",
  },
  {
    period: "2022 - Present",
    title: "Founder & Developer",
    institution: "W3DU",
    description:
      "Building AI-powered products and MVPs. W3DU combines technical expertise with artificial intelligence to launch products from zero. • Orça Comigo: finance management app for couples. R$280,000+ managed across 1,100+ transactions by real users. • Balão Revelação (BabyPool): gender reveal betting platform. MVP generated R$1,200+ in revenue with 50+ bets in the first round.",
    photo: "/babyPool.jpeg",
  },
  {
    period: "Apr 2023 - Present",
    title: "Senior FullStack Engineer",
    institution: "Balpas Serviços Médicos",
    description:
      "Led a team of 4 developers, driving successful project deliveries through effective team management and agile practices. Integrated API solutions for chat, video conferencing, and payment processing with Stripe. Trained 3 Junior developers into intermediate level during the first phase of the project.",
    photo: "/babyPool.jpeg",
  },
  {
    period: "Jul 2022 - Feb 2024",
    title: "Blockchain DevOps Engineer",
    institution: "Zoop",
    description:
      "AWS management (EC2, RDS, Lambda, IAM, Route53, CloudWatch, API Gateway) with Terraform. Deployed Elastic observability stack (ELK) and Grafana monitoring. Created disaster recovery and business continuity plans. Deployed serverless functions using Serverless Framework.",
    photo: "/babyPool.jpeg",
  },
  {
    period: "Mar 2022 - Nov 2022",
    title: "Blockchain Developer (Contract)",
    institution: "BlockBr / Mentora / NFTFY",
    description:
      "Worked on short-term Web3 projects during transition into fintech. Full-stack blockchain development: DApps with React, Node.js, and Solidity (BlockBr). Token engineering: ERC20 game and governance tokens, deployed smart contracts with Hardhat, integrated with Uniswap Router (Mentora). NFT staking platform: frontend with React, Next.js, TypeScript. Implemented design system and code standards with ESLint + Prettier (NFTFY).",
    photo: "/babyPool.jpeg",
  },
  {
    period: "Mar 2021 - Jun 2022",
    title: "Head of Technology",
    institution: "CryptoJr",
    description:
      "Restructured consulting & development services, aligning them to the market. Led the largest project in CryptoJr history, worth 50% more than the official revenue goal for the whole year. Led the biggest team in the company with 9 members.",
    photo: "/babyPool.jpeg",
  },
  {
    period: "Oct 2019 - Apr 2022",
    title: "Information Technology Analyst",
    institution: "Vale S.A.",
    description:
      "IT infrastructure leader at a 100,000+ employee company. Led the hosting tower for Basic Metals mines in the North corridor. Managed physical and digital infrastructure: Windows Server, Virtualization, Backup, CyberSecurity. Conducted projects to increase security and availability. Became a reference in the sector and led English training initiatives.",
    photo: "/babyPool.jpeg",
  },
  {
    period: "Aug 2018 - Oct 2019",
    title: "SysAdmin",
    institution: "Sonda IT",
    description:
      "Outsource at Northeast Brazilian Bank. Managing critical finance systems hosted on Windows Servers, supporting infrastructure services including AD, DNS, DHCP, IIS, Clustering and backup. Maintaining virtualized environments with Hyper-V and VMWare. Automating tasks using PowerShell.",
    photo: "/babyPool.jpeg",
  },
  {
    period: "Jan 2018 - Mar 2018",
    title: "IT Helpdesk Engineer",
    institution: "PFH Technology Group",
    description:
      "Managing infrastructure services: Image Deployment with MDT. Monitoring, patching, backup and antivirus using cloud-based solutions. Automating tasks using PowerShell.",
    photo: "/babyPool.jpeg",
  },
  {
    period: "Feb 2012 - Mar 2017",
    title: "SysOps Administrator",
    institution: "Lanlink Informática LTDA",
    description:
      "Implementation and administration of Infrastructure services using IBM Bladecenter and Dell servers, Citrix NetScaler, Exchange Servers, Windows Server Services, Hyper-V and VMware. Supporting the development team with IIS, Web Services, JBoss, Tomcat technologies.",
    photo: "/babyPool.jpeg",
  },
];

export const talkData = [
  {
    name: "Web3 - Blockchain, Tokens and NFTs",
    date: " Mai 2023",
    instutution: "Digital College",
    photo: "/digitalcollege.jpeg",
  },
  {
    name: "Web3: The new way to earn money",
    date: " Oct 2022",
    instutution: "CEMP/UFC",
    photo: "/cemp.jpeg",
  },
  {
    name: "Blockchain, cryptocurrency and the future of the money",
    date: "May 2022",
    instutution: "Chatbot by Suri",
    photo: "/suri.jpeg",
  },
  {
    name: "How blockchain is changing the way to keep data",
    date: "Aug 2019",
    instutution: "SUCESUCE",
    photo: "/sabadocomTI.jpeg",
  },
  {
    name: "Blockchain as a service (BaaS)",
    date: "2019",
    instutution: " BSBR Cloud Computing MBA",
    photo: "/baas.jpeg",
  },
];

export const skillsData = {
  languages: [
    { alt: "html", img: html },
    { alt: "css", img: css },
    { alt: "js", img: js },
    { alt: "ts", img: ts },
    { alt: "solidity", img: solidity },
    { alt: "python", img: python },
  ],
  frameworks: [
    { alt: "react", img: react },
    { alt: "nextjs", img: nextjs },
    { alt: "tailwind", img: tailwind },
    { alt: "nodejs", img: nodejs },
    { alt: "serverless", img: serverless },
    { alt: "nest", img: nest },
  ],
  databases: [
    { alt: "mysql", img: mysql },
    { alt: "postgresql", img: postgresql },
    { alt: "mongodb", img: mongodb },
    { alt: "aurora", img: aurora },
    { alt: "prisma", img: prisma },
    { alt: "sequelize", img: sequelize },
  ],
  blockchain: [
    { alt: "hardhat", img: hardhat },
    { alt: "openzeppelin", img: openzeppelin },
    { alt: "web3js", img: web3js },
    { alt: "ethers", img: ethers },
    { alt: "thirdweb", img: thirdweb },
    { alt: "infura", img: infura },
    { alt: "alchemy", img: alchemy },
  ],
  cloudOps: [
    { alt: "AWS", img: aws },
    { alt: "Azure", img: azure },
    { alt: "Jenkins", img: jenkins },
    { alt: "Docker", img: docker },
    { alt: "Terraform", img: terraform },
    { alt: "Ansible", img: ansible },
    { alt: "Elastic Stack", img: elastic },
    { alt: "Grafana", img: grafana },
  ],
};

export const displaySkills = [
  {
    text: "Programming Languages",
    src: skillsData.languages,
  },
  {
    text: "Frameworks",
    src: skillsData.frameworks,
  },
  {
    text: "Databases and ORMs",
    src: skillsData.databases,
  },
  {
    text: "Cloud and DevOps",
    src: skillsData.cloudOps,
  },
  {
    text: "Blockchain",
    src: skillsData.blockchain,
  },
];
