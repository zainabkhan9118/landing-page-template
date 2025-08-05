import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const GuideCard = ({ guide }) => {
  return (
    <div className="h-full">
      <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <CardHeader className="text-center pb-4">
          {guide.step && (
            <div className="text-sm font-medium text-yellow-600 mb-2">{guide.step}</div>
          )}
          <div className="text-4xl mb-3">{guide.icon}</div>
          <CardTitle className="text-xl font-bold text-gray-900">
            {guide.title}
          </CardTitle>
          {guide.arabic && (
            <div className="text-lg text-gray-600 mt-2 font-arabic">{guide.arabic}</div>
          )}
        </CardHeader>
        
        <CardContent className="flex-grow">
          <CardDescription className="text-gray-700 text-center leading-relaxed">
            {guide.description}
          </CardDescription>
        </CardContent>
        
        <CardFooter className="pt-4">
          <Link 
            to={guide.link} 
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-center inline-block"
          >
            Learn More
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default GuideCard;