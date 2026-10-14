import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Eye, EyeOff, Lock, Mail, Rocket, ShieldCheck, User } from 'lucide-react'
import './Auth.css'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type SignupErrors = {
  name?: string
  email?: string
  password?: string
  confirm?: string
  terms?: string
}

export const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<SignupErrors>({})
  const [note, setNote] = useState<string | null>(null)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const next: SignupErrors = {}
    if (!name.trim()) {
      next.name = 'Tell us your name.'
    }
    if (!email.trim()) {
      next.email = 'Enter your email address.'
    } else if (!EMAIL_PATTERN.test(email.trim())) {
      next.email = 'That email address does not look right.'
    }
    if (!password) {
      next.password = 'Choose a password.'
    } else if (password.length < 8) {
      next.password = 'Use at least 8 characters.'
    }
    if (!confirm) {
      next.confirm = 'Repeat your password.'
    } else if (confirm !== password) {
      next.confirm = 'The two passwords do not match.'
    }
    if (!acceptedTerms) {
      next.terms = 'Please accept the terms to continue.'
    }

    setErrors(next)

    if (Object.keys(next).length > 0) {
      setNote(null)
      return
    }

    /*
     * No account service is connected yet: the form validates, then says so
     * rather than pretending an account was created.
     */
    setNote('Accounts are not live yet — email support@lunchpaad.com and we will set yours up.')
  }

  return (
    <div className="auth-page">
      <div className="auth-shell">
        <aside className="auth-aside">
          <span className="auth-pill">Free to start</span>
          <h2>
            Start free, <span className="gradient-text">publish fast</span>
          </h2>
          <p>
            Describe your business and lunchpaad builds the site with you — pages, copy and
            design included.
          </p>
          <ul className="auth-points">
            <li>
              <Rocket className="auth-tick" size={18} />
              No card needed to create your account.
            </li>
            <li>
              <ShieldCheck className="auth-tick" size={18} />
              Publish to your own domain whenever you are ready.
            </li>
            <li>
              <ShieldCheck className="auth-tick" size={18} />
              Upgrade, downgrade or cancel at any time.
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

          <h1>Create your account</h1>
          <p className="auth-lede">Start building free — no card required.</p>

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            <div className="auth-field">
              <label className="auth-label" htmlFor="signup-name">
                Full name
              </label>
              <div className={errors.name ? 'auth-control is-invalid' : 'auth-control'}>
                <User size={16} />
                <input
                  id="signup-name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'signup-name-error' : undefined}
                />
              </div>
              {errors.name && (
                <p className="auth-error" id="signup-name-error">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="auth-field">
              <label className="auth-label" htmlFor="signup-email">
                Email
              </label>
              <div className={errors.email ? 'auth-control is-invalid' : 'auth-control'}>
                <Mail size={16} />
                <input
                  id="signup-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@company.com"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'signup-email-error' : undefined}
                />
              </div>
              {errors.email && (
                <p className="auth-error" id="signup-email-error">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="auth-field">
              <label className="auth-label" htmlFor="signup-password">
                Password
              </label>
              <div className={errors.password ? 'auth-control is-invalid' : 'auth-control'}>
                <Lock size={16} />
                <input
                  id="signup-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="At least 8 characters"
                  autoComplete="new-password"
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={errors.password ? 'signup-password-error' : undefined}
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
                <p className="auth-error" id="signup-password-error">
                  {errors.password}
                </p>
              )}
            </div>

            <div className="auth-field">
              <label className="auth-label" htmlFor="signup-confirm">
                Confirm password
              </label>
              <div className={errors.confirm ? 'auth-control is-invalid' : 'auth-control'}>
                <Lock size={16} />
                <input
                  id="signup-confirm"
                  type={showPassword ? 'text' : 'password'}
                  value={confirm}
                  onChange={(event) => setConfirm(event.target.value)}
                  placeholder="Repeat your password"
                  autoComplete="new-password"
                  aria-invalid={Boolean(errors.confirm)}
                  aria-describedby={errors.confirm ? 'signup-confirm-error' : undefined}
                />
              </div>
              {errors.confirm && (
                <p className="auth-error" id="signup-confirm-error">
                  {errors.confirm}
                </p>
              )}
            </div>

            <div className="auth-field">
              <label className="auth-check">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(event) => setAcceptedTerms(event.target.checked)}
                  aria-invalid={Boolean(errors.terms)}
                />
                <span>
                  I agree to the <Link className="auth-link" to="/terms-and-conditions">terms</Link>{' '}
                  and <Link className="auth-link" to="/privacy-policy">privacy policy</Link>.
                </span>
              </label>
              {errors.terms && <p className="auth-error">{errors.terms}</p>}
            </div>

            <button type="submit" className="auth-submit">
              Create account
              <ArrowRight size={18} />
            </button>
          </form>

          {note && (
            <p className="auth-note" role="status">
              {note}
            </p>
          )}

          <p className="auth-switch">
            Already have an account?{' '}
            <Link className="auth-link" to="/login">
              Sign in
            </Link>
          </p>
        </main>
      </div>
    </div>
  )
}
