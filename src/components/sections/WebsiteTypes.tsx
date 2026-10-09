import { 
  Briefcase, 
  ShoppingCart, 
  BookOpen, 
  Building2, 
  FileText, 
  Camera,
  UtensilsCrossed,
  GraduationCap,
  Heart,
  Calendar,
  LayoutDashboard,
  Globe
} from 'lucide-react'
import './WebsiteTypes.css'

export const WebsiteTypes = () => {
  const types = [
    { icon: <Briefcase />, name: 'Portfolio' },
    { icon: <ShoppingCart />, name: 'E-commerce' },
    { icon: <BookOpen />, name: 'Blog' },
    { icon: <Building2 />, name: 'Business' },
    { icon: <FileText />, name: 'Landing Page' },
    { icon: <Camera />, name: 'Photography' },
    { icon: <UtensilsCrossed />, name: 'Restaurant' },
    { icon: <GraduationCap />, name: 'Education' },
    { icon: <Heart />, name: 'Non-profit' },
    { icon: <Calendar />, name: 'Event' },
    { icon: <LayoutDashboard />, name: 'Dashboard' },
    { icon: <Globe />, name: 'Web App' }
  ]

  return (
    <section className="website-types">
      <div className="container">
        <div className="website-types-header">
          <h2>Choose your website type</h2>
          <p className="website-types-subtitle">
            Select from popular templates or start from scratch with AI
          </p>
        </div>

        <div className="types-grid">
          {types.map((type, index) => (
            <div key={index} className="type-card">
              <div className="type-icon">{type.icon}</div>
              <div className="type-name">{type.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
