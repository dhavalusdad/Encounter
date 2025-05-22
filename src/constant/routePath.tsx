import Layout from '@encounter/components/Layout';
import DialPad from '@encounter/components/ModalComonents/Call/DialPad';
import ChatApp from '@encounter/components/ModalComonents/Chat/ChatApp';
import { Navigate, type RouteObject } from 'react-router-dom';

export type RoutesType = {
  [key in
    | 'DEFAULT'
    | 'PATIENT_CHAT'
    | 'DOCTOR_CHAT'
    | 'PATIENT_CALL'
    | 'NOT_FOUND'
    | 'DOCTOR_CALL']: {
    path: string;
    headerName?: string;
    routeType: 'public' | 'authenticate' | 'un-authenticate';
    isHeaderVisible?: boolean;
    isFooterVisible?: boolean;
    element: RouteObject['element'];
    errorElement?: RouteObject['errorElement'];
  };
};

export const ROUTES: RoutesType = {
  DEFAULT: {
    path: '/',
    routeType: 'public',
    element: <Layout />
  },
  DOCTOR_CALL: {
    path: '/doctor-call',
    routeType: 'public',
    headerName: 'Profile',
    element: <DialPad />
  },
  DOCTOR_CHAT: {
    path: '/doctor-chat',
    routeType: 'public',
    headerName: 'Profile',
    element: <ChatApp />
  },
  PATIENT_CHAT: {
    path: '/patient-chat',
    routeType: 'public',
    headerName: 'Profile',
    element: <ChatApp />
  },
  PATIENT_CALL: {
    path: '/patient-call',
    routeType: 'public',
    headerName: 'Profile',
    element: <DialPad />
  },
  NOT_FOUND: {
    path: '*',
    routeType: 'public',
    element: <Navigate to="/" replace />
  }
};
