export interface Product {
    id: string
    name: string
    type: string
    category: string
    description: string
    interestRate?: number
    riskLevel?: number
    minimumInvestment?: number
    term?: string
    features?: string[]
    requirements?: string[]
    performanceData?: Array<{ month: number; value: number }>
  }
  