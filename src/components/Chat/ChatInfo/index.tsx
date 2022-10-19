import { Calendar, ChatText } from "phosphor-react";

export function ChatInfo() {
	return (
		<div className="text-color_3 lg:flex flex-col items-center justify-between mt-auto lg:mb-auto h-[75%] mb-8 hidden">
			<img src="/bot.svg" alt="" />
         <div>
            <div className="flex flex-col items-center text-center">
               <ChatText size={40} weight="fill" />
               <p className="mt-4 w-[70%] text-xl">Converse a vontade com o nosso Chatbot e tire todas as suas dúvidas que existirem </p>
            </div>

            <div className="flex flex-col items-center text-center mt-8">
               <Calendar size={40} weight="fill" />
               <p className="mt-4 w-[70%] text-xl">Funcionamento de 24 horas por dias em todos os dias da semana</p>
            </div>
         </div>
		</div>
	)
}
