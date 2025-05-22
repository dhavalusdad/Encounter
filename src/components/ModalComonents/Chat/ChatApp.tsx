// import { extractErrors, jsonParse } from '@emr-web/common';
import { Icon } from '@encounter/common';
import { useEffect, useMemo, useRef, useState } from 'react';

export const formatDateTitle = (inputDate: string) => {
  const now = new Date();
  const date = new Date(inputDate);

  if (date.toDateString() === now.toDateString()) {
    return 'Today';
  }

  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  if (date.toDateString() === yesterday.toDateString()) {
    return 'Yesterday';
  }

  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay());
  if (date >= startOfWeek) {
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
    return daysOfWeek[date.getDay()];
  }

  // return date.toISOString().split('T')[0];
  const formattedDate = `${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}/${date
    .getDate()
    .toString()
    .padStart(2, '0')}/${date.getFullYear()}`;

  return formattedDate;
};

export const convertToHourAndMinute = (timestamp: string) => {
  const date = new Date(timestamp);

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes}`;
};
interface Message {
  id: number;
  text: string;
  time: string;
  isUser: boolean;
  senderName?: string;
}

const messageData = [
  {
    id: '244',
    ticket_id: '34',
    sms_receiver: 'doctor',
    sender_id: '123',
    sender_name: 'Nurse Amy',
    text: 'Vitals are stable. BP 120/80.',
    time: '2025-05-15 09:20:45',
  },
  {
    id: '245',
    ticket_id: '34',
    sms_receiver: 'doctor',
    sender_id: '456',
    sender_name: 'Dr. Smith',
    text: 'Please administer Paracetamol 500mg.',
    time: '2025-05-15 09:25:10',
  },
  {
    id: '246',
    ticket_id: '34',
    sms_receiver: 'doctor',
    sender_id: '123',
    sender_name: 'Nurse Amy',
    text: 'Medication given at 09:30 AM.',
    time: '2025-05-15 09:32:00',
  },
  {
    id: '250',
    ticket_id: '34',
    sms_receiver: 'doctor',
    sender_id: '123',
    sender_name: 'Nurse Amy',
    text: 'Patient is ready for discharge.',
    time: '2025-05-16 08:30:45',
  },
  {
    id: '251',
    ticket_id: '34',
    sms_receiver: 'doctor',
    sender_id: '123',
    sender_name: 'Nurse Amy',
    text: 'URGENT: Patient in Room 205 has high fever (39°C).',
    time: '2025-05-17 14:15:00',
  },
  {
    id: '252',
    ticket_id: '34',
    sms_receiver: 'doctor',
    sender_id: '456',
    sender_name: 'Dr. Smith',
    text: 'On my way. Prepare IV fluids.',
    time: '2025-05-17 14:18:30',
  },
  {
    id: '253',
    ticket_id: '34',
    sms_receiver: 'doctor',
    sender_id: '456',
    sender_name: 'Dr. Smith',
    text: 'Discharge papers signed. Patient can leave by 5 PM.',
    time: '2025-05-18 16:45:00',
  }
];

type GroupedMessages = Record<string, Message[]>;

const groupMessagesByDate = (messages: Message[]): GroupedMessages => {
  return messages.reduce<GroupedMessages>((acc, message) => {
    const date = new Date(message?.time).toISOString().split('T')[0];
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(message);
    return acc;
  }, {});
};

const formatDateToCustomISO = (date: Date) => {
  const isoString = date.toISOString();
  const [datePart, timePart] = isoString.split('T');
  const [time, ms] = timePart.split('.');
  const msPadded = ms.slice(0, 3).padEnd(6, '0');
  return `${datePart}T${time}.${msPadded}Z`;
};

const ProperChat = ({
  ticketId,
  docId,
  userType,
  nurseId,
  smsReceiver
}: {
  ticketId: string;
  docId: string;
  userType: 'doctor' | 'nurse' | 'patient';
  nurseId?: string | null;
  smsReceiver?: string;
}) => {
  const senderId = userType === 'doctor' ? +docId : +(nurseId || 0);

  const [messages, setMessages] = useState<Message[]>(messageData || []);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;
    let senderName = 'Unknown';

    if (userType === 'doctor') {
      senderName = 'Dr. Smith';
    } else if (userType === 'nurse') {
      senderName = 'Nurse Amy';
    } else if (userType === 'patient') {
      senderName = 'Michel';
    }

    const data = {
      ticket_id: ticketId,
      sender_id: senderId,
      sender_name: senderName,
      chat_message: newMessage,
      // sms_id: smsId,
      sms_receiver: smsReceiver === 'patient' ? 'patient' : 'doctor'
    };

    //   await sendMessage(data);
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: newMessage,
        time: formatDateToCustomISO(new Date()),
        isUser: true,
        senderName: data.sender_name
      }
    ]);
    setNewMessage('');
  };

  const [newMessage, setNewMessage] = useState('');
  const groupedMessages = groupMessagesByDate(messages);
  const sortedDates = Object.keys(groupedMessages).sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime()
  );

  return (
    <div className="bg-Gray-300 h-screen">
      <div className="bg-white py-6 flex items-center justify-center">
        <Icon name="secureChatLogo" />
      </div>
      <div className="flex items-center justify-center h-[calc(100dvh-102px)] mx-3">
        <div className="relative max-w-90% md:max-w-682px w-full px-3 sm:px-30px py-5 sm:py-9 bg-white rounded-md">
          <div className="flex items-start md:items-center flex-wrap gap-2 md:gap-5 flex-col md:flex-row md:justify-evenly">
            <div className="flex items-center gap-1">
              <h6 className="text-sm font-medium leading-4 text-Primary-900">
                Patient:
              </h6>
              <p className="text-sm font-normal leading-4 text-Primary-900">
                {'Michel'}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <h6 className="text-sm font-medium leading-4 text-Primary-900">
                Ticket No:
              </h6>
              <p className="text-sm font-normal leading-4 text-Primary-900">
                {'Ticket123'}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <h6 className="text-sm font-medium leading-4 text-Primary-900">
                Age:
              </h6>
              <p className="text-sm font-normal leading-4 text-Primary-900">
                {'35'}
              </p>
            </div>
            <div className="w-1px h-4 bg-black/50 hidden md:block"></div>
            <div className="flex items-center gap-1">
              <h6 className="text-sm font-medium leading-4 text-Primary-900">
                Gender:
              </h6>
              <p className="text-sm font-normal leading-4 text-Primary-900">
                {'Male'}
              </p>
            </div>
          </div>
          <div className="mt-5 sm:mt-10 rounded-10px bg-Gray-400 px-3 sm:px-30px py-5 h-[calc(100dvh-316px)]  sm:h-[calc(100dvh-340px)]  lg:h-[calc(100dvh-310px)] relative">
            <div className="h-[calc(100%-60px)] overflow-y-auto scroll-disable">
              {sortedDates.map((date) => {
                return (
                  <div key={date} className="flex flex-col">
                    <div className="flex items-center justify-center mb-30px my-2">
                      <div className="bg-white shadow-Chatday rounded-full px-5 py-2">
                        <span className="text-sm font-normal leading-4 text-Gray-700">
                          {formatDateTitle(date)}
                        </span>
                      </div>
                    </div>
                    <div>
                      {groupedMessages[date].map((msg: Message) => (
                        <div
                          key={msg.id}
                          className={`flex ${
                            msg.isUser ? 'justify-end' : 'justify-start'
                          } mb-2`}>
                          <div
                            className={`flex flex-col ${
                              msg.isUser ? 'items-end' : 'items-start'
                            }`}>
                            <div
                              className={`max-w-xs px-3 py-2 rounded-lg text-sm flex gap-4 ${
                                msg.isUser
                                  ? 'bg-Primary-500 text-white'
                                  : 'bg-Primary-200 text-Gray-900'
                                // flex-row-reverse
                              } `}>
                              <span
                                className="block mt-4 text-base"
                                ref={messagesEndRef}>
                                {msg.text}
                              </span>
                              <div
                                className={`text-xs text-right block ${
                                  msg.isUser ? 'text-white' : 'text-Gray-700'
                                }`}>
                                <span className="text-xs font-normal mr-2">
                                  {msg.senderName}
                                </span>
                                {convertToHourAndMinute(msg.time)}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {(() => {
              const isGeneralChatInitiated = true;

              if (isGeneralChatInitiated) {
                return (
                  <div className="bg-white rounded-10px shadow-message absolute bottom-5 left-[30px] right-[30px]">
                    <div className="relative w-full">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Write your message"
                        className="border-0 px-4 py-4 pr-10 focus:outline-none w-full placeholder:text-Gray-900 rounded-10px"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            handleSendMessage();
                          }
                        }}
                      />
                      <Icon
                        name="send"
                        onClick={handleSendMessage}
                        className="absolute top-2/4 -translate-y-2/4 right-4"
                      />
                    </div>
                  </div>
                );
              }

              return (
                <div className="bg-white rounded-10px absolute bottom-5 left-[30px] right-[30px]">
                  <p className="border-0 px-4 py-4 pr-10 w-full text-center text-gray-400">
                    Chat has not been initiated.
                  </p>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

const useQueryParams = () => {
  return useMemo(() => {
    return new URLSearchParams(window.location.search);
  }, []);
};
const ChatApp: React.FC = () => {
  const searchParams = useQueryParams();
  const userId = '123';
  const ticketId = 'Ticket123';
  const nurseId = '123';
  const smsReceiver = searchParams.get('sms_receiver') || 'doctor';

  const userType = userId ? 'doctor' : 'nurse';
  const docId = '456';

  return (
    <ProperChat
      ticketId={ticketId || ''}
      docId={docId}
      userType={userType}
      nurseId={nurseId}
      smsReceiver={smsReceiver}
    />
  );
};

export default ChatApp;
