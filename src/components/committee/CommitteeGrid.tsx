
import { Committee } from "@/data/committeeData";
import CommitteeCard from "./CommitteeCard";

interface CommitteeGridProps {
  committees: Committee[];
}

const CommitteeGrid = ({ committees }: CommitteeGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {committees.map((committee, index) => (
        <CommitteeCard key={index} committee={committee} />
      ))}
    </div>
  );
};

export default CommitteeGrid;
