import { Clock, MessageSquare } from 'lucide-react';

import { useAppSelector } from '@/hooks/useAppSelector';
import { type MessageHistoryItem } from '@/store/history/historySlice';
import { formatDate, truncateMessage } from './utils';

export const MessageHistory = () => {
  const { history } = useAppSelector(state => state.history);

  return (
    <div className='mt-4 border-1 border-gray-200 rounded-lg p-4 bg-gray-50'>
      <div className='flex items-center justify-between mb-3'>
        <div className='flex items-center gap-2'>
          <MessageSquare className='w-4 h-4 text-gray-600' />
          <p className='text-sm font-semibold text-gray-800'>Message History</p>
          {history.length > 0 && (
            <span className='text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full'>
              {history.length}
            </span>
          )}
        </div>
      </div>

      {history.length > 0 && (
        <div className='space-y-2 max-h-64 overflow-y-auto'>
          {history.map((item: MessageHistoryItem) => (
            <div
              key={item.id}
              className='bg-white border border-gray-200 rounded-md p-3 hover:shadow-sm transition-shadow'
            >
              <div className='flex items-start justify-between gap-2'>
                <div className='flex-1 min-w-0'>
                  <p className='text-sm text-gray-800 font-medium leading-relaxed'>
                    {truncateMessage(item.message)}
                  </p>
                  <div className='flex items-center gap-1 mt-2 text-xs text-gray-500'>
                    <Clock className='w-3 h-3' />
                    <span>{formatDate(item.createdOn)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
