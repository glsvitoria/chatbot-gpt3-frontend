import React from 'react'
import { MagnifyingGlass, Bell } from 'phosphor-react'

import { SelectedPage } from './style'

export function Header() {
	return (
		<header className="flex h-20 items-center justify-center bg-color_5 text-color_3">
			<div className="flex h-20 items-center justify-between max-w-[1440px] w-[1440px]">
				<div className="flex items-center ml-6 h-full">
					<img src="/logo.svg" alt="Logo do chatbot" className="mr-6" />
					<h1 className="font-semibold text-2xl">Chatbot</h1>
				</div>

				<div className="flex h-full items-center">
					<nav className='lg:block hidden'>
						<ul className="flex text-[#FFF] font-medium text-base w-[480px] justify-around mr-6">
							<li className="hover:cursor-pointer">Home</li>
							<SelectedPage className="text-color_4 hover:cursor-pointer relative">
								Chat
							</SelectedPage>
							<li className="hover:cursor-pointer">Contato</li>
							<li className="hover:cursor-pointer">Termos</li>
						</ul>
					</nav>

					<div className="flex items-center justify-around w-32 text-[#FFF]">
						<MagnifyingGlass
							className="hover:cursor-pointer"
							size={32}
							weight="bold"
						/>
						<Bell
							className="hover:cursor-pointer"
							size={32}
							weight="fill"
						/>
					</div>
				</div>
			</div>
		</header>
	)
}
