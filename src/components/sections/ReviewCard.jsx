import reviewAvatar from "../../assets/icons/review-avatar.svg";

export default function ReviewCard({ review }) {
  return (
    <div className="flex h-full flex-col gap-6">
      <img src={reviewAvatar} alt="" aria-hidden="true" className="size-[42px]" />
      <div className="flex flex-col gap-6">
        <p className="text-xs leading-[30px] text-ink">{review.quote}</p>
        <p className="text-[10px] font-medium leading-[19px] text-ink">{`⎯    ${review.author}`}</p>
      </div>
    </div>
  );
}
