import * as React from 'react';

type Status = 'unknown' | 'Alive' | 'Dead';

interface IStatusIndicatorProps {
  status: Status;
}

const getStatusColor = (status: Status) => {
  switch (status) {
    case 'Alive':
      return 'bg-green-600';
    case 'Dead':
      return 'bg-red-700';
    default:
      return 'bg-gray-400';
  }
};

const StatusIndicator: React.FC<IStatusIndicatorProps> = ({ status }) => {
  return (
    <>
      <div className={`badge badge-xs mr-1 ${getStatusColor(status)}`}></div>
      {status}
    </>
  );
};

export default StatusIndicator;
