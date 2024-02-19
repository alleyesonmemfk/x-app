import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import PageNotFound from './pages/PageNotFound'
import Settings from './pages/Settings'
import GlobalStyles from './styles/GlobalStyles'
import AppLayout from './ui/AppLayout'

function App() {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route element={<AppLayout />}>
						<Route index element={<Navigate replace to='dashboard' />} />
						<Route path='dashboard' element={<Dashboard />} />
						<Route path='settings' element={<Settings />} />
					</Route>
					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
