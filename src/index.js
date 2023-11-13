import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import * as Sentry from "@sentry/electron"

Sentry.init({
  dsn: "https://f8d352a34ce4c8550bb82e7b366a3229@o4506206215733248.ingest.sentry.io/4506218088366080",
  integrations: [
		new Sentry.BrowserTracing({
			tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
		}),
		new Sentry.Replay(),
	],
	tracesSampleRate: 1.0,
	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1.0,
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals()
