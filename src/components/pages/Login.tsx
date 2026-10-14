import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Eye, EyeOff, Lock, Mail, ShieldCheck } from 'lucide-react'
import './Auth.css'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type LoginErrors = {
  email?: string
  password?: string
}

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(true)
  const [errors, setErrors] = useState<LoginErrors>({})
  const [note, setNote] = useState<string | null>(null)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const next: LoginErrors = {}
    if (!email.trim()) {
      next.email = 'Enter your email address.'
    } else if (!EMAIL_PATTERN.test(email.trim())) {
      next.email = 'That email address does not look right.'
    }
    if (!password) {
      next.password = 'Enter your password.'
    } else if (password.length < 8) {
      next.password = 'Your password is at least 8 characters.'
    }

    setErrors(next)

    if (Object.keys(next).length > 0) {
      setNote(null)
      return
    }

    /*
     * There is no account service connected to this site yet, so the page says
     * that plainly instead of pretending the details were accepted.
     */
    setNote('Accounts are not live yet — email support@lunchpaad.com and we will set yours up.')
  }

  return (
    <div className="auth-page">
      <div className="auth-shell">
        <aside className="auth-aside">
          <span className="auth-pill">Welcome back</span>
          <h2>
            Your site, <span className="gradient-text">still building</span>
          </h2>
          <p>
            Pick up where you left off: your projects, pages and published sites are waiting for
            you.
          </p>{' '}
          <ul className="auth-points">
            <li>
              <ShieldCheck className="auth-tick" size={18} />
              Your work is saved to your account, not just this browser.
            </li>
            <li>
              <ShieldCheck className="auth-tick" size={18} />
              Sign in on any device to keep editing.
            </li>
            <li>
              <ShieldCheck className="auth-tick" size={18} />
              Change your plan or cancel at any time.
            </li>
          </ul>
          <p className="auth-trust">
            <Lock size={14} />
            Protected with encrypted connections.
          </p>
        </aside>

        <main className="auth-card">
          <div className="auth-brand">
            <Link to="/" className="auth-brand-link">
              <img src="/logo.jpg" alt="" className="auth-brand-logo" />
              <span className="auth-brand-name">lunchpaad</span>
            </Link>
            <Link to="/" className="auth-back">
              Back to home
            </Link>
          </div>

          <h1>Sign in</h1>
          <p className="auth-lede">Enter your details to continue building.</p>

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            <div className="auth-field">
              <label className="auth-label" htmlFor="login-email">
                Email
              </label>
              <div className={errors.email ? 'auth-control is-invalid' : 'auth-control'}>
                <Mail size={16} />
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@company.com"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'login-email-error' : undefined}
                />
              </div>
              {errors.email && (
                <p className="auth-error" id="login-email-error">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="auth-field">
              <label className="auth-label" htmlFor="login-password">
                Password
              </label>
              <div className={errors.password ? 'auth-control is-invalid' : 'auth-control'}>
                <Lock size={16} />
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Your password"
                  autoComplete="current-password"
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={errors.password ? 'login-password-error' : undefined}
                />
                <button
                  type="button"
                  className="auth-toggle"
                  onClick={() => setShowPassword((value) => !value)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && (
                <p className="auth-error" id="login-password-error">
                  {errors.password}
                </p>
              )}
            </div>

            <div className="auth-row">
              <label className="auth-check">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(event) => setRemember(event.target.checked)}
                />
                Remember me
              </label>
              <Link className="auth-link" to="/contact">
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="auth-submit">
              Sign in
              <ArrowRight size={18} />
            </button>
          </form>

          {note && (
            <p className="auth-note" role="status">
              {note}
            </p>
          )}

          <p className="auth-switch">
            New to lunchpaad?{' '}
            <Link className="auth-link" to="/signup">
              Create an account
            </Link>
          </p>
        </main>
      </div>
    </div>
  )
}
