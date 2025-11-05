import { getAllTeamMembers } from '@/lib/content'
import EquipeClient from '@/components/EquipeClient'
import { HeaderWrapper } from '@/components/HeaderWrapper'
import { FooterWrapper } from '@/components/FooterWrapper'

export const metadata = {
  title: 'Notre Équipe - Argam Conseils',
  description: 'Découvrez notre équipe d\'experts en gestion de patrimoine et protection sociale à Bordeaux et La Réunion.',
}

export default function EquipePage() {
  const members = getAllTeamMembers()

  return (
    <div className="min-h-screen bg-white">
      <HeaderWrapper />
      <EquipeClient members={members} />
      <FooterWrapper />
    </div>
  )
}
