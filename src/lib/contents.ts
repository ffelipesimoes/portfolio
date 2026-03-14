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
    title: "NFTFact - A backend for NFT factory",
    description: "This is a project to create a factory of NFT contracts.",
    tags: ["Solidity", "Typescript", "Nestjs", "Hardhat"],
    link: "https://github.com/ffelipesimoes/nft-factory-api-nest-hardhat",
  },
  {
    title: "Deploy Smart Contract With Hard Wallet",
    description:
      "This project shows how to deploy a smart contract using a hardware wallet.",
    tags: ["Hardhat", "Truffle", "Metamask", "Ledger"],
    link: "https://github.com/ffelipesimoes/deploy-smartcontract-with-hardwallet/",
  },
  {
    title: " Serverless Ecommerce API with AWS",
    description:
      "An e-commerce application designed to be deployed in the AWS) cloud environment. ",
    tags: ["Serverless", "Typescript", "AWS CDK", "Nodejs"],
    link: "https://github.com/ffelipesimoes/nodejs-aws-serverless-ecommerce",
  },
  {
    title: "IaC - Deploy Infrasctructure with AWS",
    description:
      "This project demostrates how to deploy a cloud enviroment with bastion servers and ec2 instances.",
    tags: ["AWS", "Terraform", "Infrastructure-as-Code"],
    link: "https://github.com/ffelipesimoes/terraform-bastionHost-ec2-aws",
  },
  {
    title: "BabyPool - A baby gender guessing game",
    description:
      "At BabyPool people can bet on the expected gender of the child and receive rewards if right. ",
    tags: ["ReactJs", "Tailwindcss", "Hardhat", "Solidity"],
    link: "https://github.com/ffelipesimoes/git-gbaby-gender-prediction",
  },
  {
    title: "Full-ERC721-Deploy on EVM-Based",
    description:
      "This project demonstrates the creation of an NFT with ERC721 contract. The user can store the asset in IPFS and mint the NFT.",
    tags: ["Solidity", "Hardhat", "IPFS", "Typescript"],
    link: "https://github.com/ffelipesimoes/Full-ERC721-Deployed-on-EVM-Based",
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
      "Advancing in blockchain applications, focusing on decentralized systems, financial blockchain integration, DApp development, and Web 3.0 technologies.",
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
      "      •   Lead a team of 5 developers using agile methodologies, delivering the payment solutions and the company’s Backoffice platform.      •   Developed and implemented a multitenant system, reducing initial project costs by 75% and enabling future scalability.       •   Migrated the blockchain infrastructure to AWS, reducing infrastructure-related incidents by 90%.       •   Developed 2 API integrations for the payment system, including the Hathor blockchain with HSM.       •   Provide critical support for the Pix operation, which generates >80% of company revenue, prioritizing stability, and uptime.  ",
    photo: "/babyPool.jpeg",
  },
  {
    period: "Apr 2023 - Present ",
    title: "Senior FullStack Engineer",
    institution: "Balpas Serviços Médicos",
    description:
      "      •  	Led a team of 4 developers, driving successful project deliveries through effective team management and agile practices.       •  	Integrated API solutions as chat, video conferencing, and payment processing with Stripe as part of business.       •  	Trained 3 Junior developers into intermediate level during the first part of project. ",
    photo: "/babyPool.jpeg",
  },
  {
    period: "Jul 2022 - Feb 2024",
    title: "Blockchain Devops Engineer",
    institution: "Zoop",
    description:
      "Blockscout blockchain data analysis system maintenance. • AWS management (EC2,RDS,Lambda,IAM, Route53, CloudWatch, API Gateway) with Terraform. • Deploy of Elastic observability stack: Elasticsearch, Logstash and Kibana(ELK Stack). • Deploy of the Grafana monitoring tool. • Participation in the creation of disaster and recovery plan and business continuity plan. • Deploying serverless functions using serverless framework. ",
    photo: "/babyPool.jpeg",
  },
  {
    period: "Aug 2022 - Nov 2022",
    title: "Web3 Frontend Developer",
    institution: "NFTFY",
    description:
      "Participation in the development of the NFT stake rewards platform. That platform used React + Next.js and Typescript. For code patterns we use ESLint + Prettier + Cspell. Versioning using git/Github.     Deploy of some components for own design system and Antd. Also used styled components + Antd. We use SCRUM as agile methodology.",
    photo: "/babyPool.jpeg",
  },
  {
    period: "Mar 2022 - Aug 2022",
    title: "Web3 Developer",
    institution: "Mentora",
    description:
      "My team have created the ERC20 game token, the governance token, also a ERC20 with extensions. We have deployed a customized contract to a public/stack Offer and ran tests for this contracts with Hardhat. Deploy of a contract that interacts with Uniswap Router. ",
    photo: "/babyPool.jpeg",
  },
  {
    period: "Mar 2022 - May 2022",
    title: "Full Stack and Blockchain Developer",
    institution: "BlockBr",
    description:
      "Full stack developer creating solutions with stack: React, Node.js, Solidity. Agile project, Jira, Miro, Trello. ",
    photo: "/babyPool.jpeg",
  },
  {
    period: "Mar 2021 - Jun 2022",
    title: "Head Of Technology and Blockchain Developer",
    institution: "CryptoJr",
    description:
      "- Restructured our consulting & development services and sectors & positions, aligning them better to the market; - Leding the largest project in the history of Crypto Jr. This project worth 50% more than the official revenue goal for the whole year. This was also the all-time record capitalization at any given time in Crypto's history; - Leding the biggest team in the company with 9 members. ",
    photo: "/babyPool.jpeg",
  },
  {
    period: "Oct 2019 - Apr 2022",
    title: "Information Technology Analyst",
    institution: "Vale S.A",
    description:
      "Leader of the hosting tower for the Basic Metals mines in the North corridor. Conducting projects to increase security and availability to the business. Acting in the IT / OT integration program. Responsible for maintaining the infrastructure environment: Windows Server, Virtualization, Backup, CyberSecurity. ",
    photo: "/babyPool.jpeg",
  },
  {
    period: "Aug 2018 - Oct 2019",
    title: "SysAdmin",
    institution: "Sonda IT",
    description:
      "Outsource at Northeast Brazilian Bank. Managing critical finance systems hosted on Windows Servers family 2k - 2k19, supporting infrastructure services as AD, GPO, DNS, DHCP, FS, DFS, IIS, HIS, Components, NLB, HA, Clustering and backup. Maintaining virtualized environments with Hyper-V and VMWare and automating tasks using powershell.",
    photo: "/babyPool.jpeg",
  },
  {
    period: "Jan 2018 - Mar 2018",
    title: "IT Helpdesk Engineer",
    institution: "PFH Technology Group",
    description:
      "Managing the infrastructure services: Image Deployment with MDT. Monitoring, patching, backup and antivirus using cloud-based solutions. Windows Update management and troubleshooting. Taking part of antivirus migration process. Improving automatizated tasks using powershell.",
    photo: "/babyPool.jpeg",
  },
  {
    period: "Feb 2012 - Mar 2017",
    title: "SysOps Administrator",
    institution: "Lanlink Informática LTDA",
    description:
      "Implementation and administration of Infrastructure services using IBM Bladecenter and Dell servers, Citrix NetScaler, Exchange Servers, Windows Server Services, Hyper-V and VMware. Improving the Security Level using Kaspersky Technologies. Improving the Service Desk experience with tasks automatization by scripts. Supporting the develop team with IIS, Web Service, Jboss, Tomcat Technologies. ",
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
    text: "Blockchain",
    src: skillsData.blockchain,
  },
  {
    text: "Cloud and Devops",
    src: skillsData.cloudOps,
  },
];
