import React, { useState, useRef, useEffect } from "react";
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type LayoutProps = {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {

	const router = useRouter();

	return (
		<>
			<Head>
				<title>Ghost Prisms</title>
				<meta name="description" content="Ghost Prisms" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta property="og:title" content="test3 test" />
				<meta property="og:description" content="test5 test" />
				{/* <meta property="og:image" content="https://i.stack.imgur.com/8rEut.jpg" /> */}
				<meta property="og:url" content="https://example.com/page.html" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css?family=Chakra Petch&display=swap" rel="stylesheet" />
			</Head>
			<main className="bg-[#00040E]">
				<div className="flex flex-col relative min-h-screen mx-auto px-2 md:px-0">
					<Header />
					{children}
					<Footer />
				</div>
			</main>
		</>
	)
}
export default Layout;
