import * as React from 'react';
import { Status } from '../../../query/characters/useCharacters';

interface IStatusIndicatorProps {
  status: Status;
}

const getStatusColor = (status: Status) => {
  switch (status) {
    case Status.Alive:
      return 'bg-green-600';
    case Status.Dead:
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
