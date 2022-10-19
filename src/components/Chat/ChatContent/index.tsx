import { HandWaving, PaperPlaneRight, Pencil } from 'phosphor-react'
import { Dispatch, SetStateAction, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { ChatProps } from '../ChatContainer'

import './style.css'
import { Messages } from '../../Messages'
import api from '../../../services/api'

interface Props {
	chat: ChatProps[]
	setChat: Dispatch<SetStateAction<ChatProps[]>>
}

const baseURL = 'http://localhost:5173'

export function ChatContent({ chat, setChat }: Props) {
	const [inputText, setInputText] = useState('')
	const [disableTextInput, setDisableTextInput] = useState(false)
	const [loading, setLoading] = useState(true)

	function handleSubmit(event: any) {
		event.preventDefault()

		if (inputText.length == 0) return

		const newMessage = {
			id: uuidv4(),
			isUser: true,
			message: inputText,
			createdAt: {
				hour: new Date().getHours(),
				minutes: new Date().getMinutes(),
			},
		}

		setChat((oldArray) => [...oldArray, newMessage])

		setDisableTextInput(true)
		setLoading(true)

		api.post('/predict', {
			message: inputText,
		})
			.then((r) => {
				const newBotMessage = {
					id: uuidv4(),
					isUser: false,
					message: r.data.answer,
					createdAt: {
						hour: new Date().getHours(),
						minutes: new Date().getMinutes(),
					},
				}

				setDisableTextInput(false)
				setLoading(false)
				setChat((oldArray) => [...oldArray, newBotMessage])
			})
			.catch((error) => {
				console.log('Error', error)

				const newBotMessage = {
					id: uuidv4(),
					isUser: false,
					message: 'Problemas na conexão. Tente novamente em instantes',
					createdAt: {
						hour: new Date().getHours(),
						minutes: new Date().getMinutes(),
					},
				}

				setDisableTextInput(false)
				setLoading(false)
				setChat((oldArray) => [...oldArray, newBotMessage])
			})

		setInputText('')
	}

	return (
		<div className="grid grid-rows-chat bg-color_3/40 rounded-[40px] mr-auto ml-auto w-[90%] h-[calc(100%-11.1rem)] mt-6 relative">
			{chat.length == 0 && (
				<p className="w-[75%] mx-auto pt-8 text-center text-[#0000007a] font-semibold">
					<HandWaving size={40} weight="fill" className="mx-auto mb-4" />
					Olá essa é a Stella, uma assistente AI, ela pode responder suas
					perguntas sobre o código de conduta Stellantis.
				</p>
			)}

			{chat.length > 0 && <Messages chat={chat} loading={loading} />}

			<form className="flex justify-between w-[90%] mx-[5%] absolute bottom-8">
				<div className="flex bg-color_3/50 w-[85%] rounded-full px-8 py-3 my-auto">
					<Pencil size={32} weight="fill" className="mr-4" />
					<input
						type="text"
						placeholder="Escreva aqui sua mensagem..."
						className="w-full bg-color_1/0 focus:outline-0 placeholder:text-[#FFF] input"
						onChange={(event) => setInputText(event.target.value)}
						value={inputText}
						disabled={disableTextInput}
					/>
				</div>

				<button
					className="bg-color_5 rounded-full w-14 h-14 active:bg-color_5 border-color_5 border-2 hover:bg-color_4 duration-300"
					onClick={handleSubmit}
				>
					<PaperPlaneRight size={28} weight="fill" className="m-auto" />
				</button>
			</form>
		</div>
	)
}
