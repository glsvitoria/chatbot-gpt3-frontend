import { ChatArea } from '../ChatArea'
import { ChatInfo } from '../ChatInfo'
import * as Dialog from '@radix-ui/react-dialog'
import { Modal } from '../../Modal'
import { useState } from 'react'

export interface ChatProps {
	id: string
	isUser: boolean
	message: string
	createdAt: {
      hour: number,
      minutes: number
   }
}

export function Chat() {
   const [chat, setChat] = useState<ChatProps[]>([])

	return (
		<main className="m-h-[100vh] h-[56rem] max-w-[1440px] m-auto flex lg:flex-row flex-col">
			<Dialog.Root>
				<ChatArea chat={chat} setChat={setChat} />
				<Modal setChat={setChat} />
			</Dialog.Root>
			<ChatInfo />
		</main>
	)
}
