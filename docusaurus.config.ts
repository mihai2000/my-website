// import {themes as prismThemes} from 'prism-react-renderer';
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
	title: "My Site",
	tagline: "Dinosaurs are cool",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://your-docusaurus-site.example.com",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "facebook", // Usually your GitHub org/user name.
	projectName: "docusaurus", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					docItemComponent: "@theme/ApiItem",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					//   editUrl:
					//     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				blog: {
					showReadingTime: true,
					feedOptions: {
						type: ["rss", "atom"],
						xslt: true,
					},
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					// editUrl:
					//   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
					// Useful options to enforce blogging best practices
					onInlineTags: "warn",
					onInlineAuthors: "warn",
					onUntruncatedBlogPosts: "warn",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: "img/docusaurus-social-card.jpg",
		navbar: {
			title: "My Site",
			logo: {
				alt: "My Site Logo",
				src: "img/logo.svg",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "tutorialSidebar",
					position: "left",
					label: "Tutorial",
				},
				{ to: "/blog", label: "Blog", position: "left" },
				{
					href: "https://github.com/facebook/docusaurus",
					label: "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Docs",
					items: [
						{
							label: "Tutorial",
							to: "/docs/intro",
						},
					],
				},
				{
					title: "Community",
					items: [
						{
							label: "Stack Overflow",
							href: "https://stackoverflow.com/questions/tagged/docusaurus",
						},
						{
							label: "Discord",
							href: "https://discordapp.com/invite/docusaurus",
						},
						{
							label: "Twitter",
							href: "https://twitter.com/docusaurus",
						},
					],
				},
				{
					title: "More",
					items: [
						{
							label: "Blog",
							to: "/blog",
						},
						{
							label: "GitHub",
							href: "https://github.com/facebook/docusaurus",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
		},
		prism: {
			//   theme: prismThemes.github,
			//   darkTheme: prismThemes.dracula,
			additionalLanguages: [
				"ruby",
				"csharp",
				"php",
				"java",
				"powershell",
				"json",
				"bash",
				"dart",
				"objectivec",
				"r",
			],
		},
		languageTabs: [
			{
				highlight: "python",
				language: "python",
				logoClass: "python",
			},
			{
				highlight: "bash",
				language: "curl",
				logoClass: "curl",
			},
			{
				highlight: "csharp",
				language: "csharp",
				logoClass: "csharp",
			},
			{
				highlight: "go",
				language: "go",
				logoClass: "go",
			},
			{
				highlight: "javascript",
				language: "nodejs",
				logoClass: "nodejs",
			},
			{
				highlight: "ruby",
				language: "ruby",
				logoClass: "ruby",
			},
			{
				highlight: "php",
				language: "php",
				logoClass: "php",
			},
			{
				highlight: "java",
				language: "java",
				logoClass: "java",
				variant: "unirest",
			},
			{
				highlight: "powershell",
				language: "powershell",
				logoClass: "powershell",
			},
			{
				highlight: "dart",
				language: "dart",
				logoClass: "dart",
			},
			{
				highlight: "javascript",
				language: "javascript",
				logoClass: "javascript",
			},
			{
				highlight: "c",
				language: "c",
				logoClass: "c",
			},
			{
				highlight: "objective-c",
				language: "objective-c",
				logoClass: "objective-c",
			},
			{
				highlight: "ocaml",
				language: "ocaml",
				logoClass: "ocaml",
			},
			{
				highlight: "r",
				language: "r",
				logoClass: "r",
			},
			{
				highlight: "swift",
				language: "swift",
				logoClass: "swift",
			},
			{
				highlight: "kotlin",
				language: "kotlin",
				logoClass: "kotlin",
			},
			{
				highlight: "rust",
				language: "rust",
				logoClass: "rust",
			},
		],
	} satisfies Preset.ThemeConfig,
	plugins: [
		[
			"docusaurus-plugin-openapi-docs",
			{
				id: "api", // plugin id
				docsPluginId: "classic", // configured for preset-classic
				config: {
					petstore: {
						specPath: "examples/petstore.yaml",
						outputDir: "docs/petstore",
						sidebarOptions: {
							groupPathsBy: "tag",
						},
					} satisfies OpenApiPlugin.Options,
				} satisfies Plugin.PluginOptions,
			},
		],
	],
	themes: ["docusaurus-theme-openapi-docs"], // export theme components
};

export default config;
