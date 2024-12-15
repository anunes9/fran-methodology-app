import { useState } from "react"
import {
  CloseButton,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react"
import { IconX } from "@tabler/icons-react"

export const ExerciseImage = ({
  title,
  image,
}: {
  title: string
  image: string
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        className="hover:cursor-pointer hover:opacity-75 hover:text-projectGreen hover:bg-gray-100 border rounded-md px-2 py-4"
        onClick={() => setIsOpen(true)}
      >
        <img src={image} />

        <h2 className="text-lg font-gtMedium mt-2">{title}</h2>
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 rounded-md">
          <DialogPanel className="max-w-fit rounded-md space-y-4 border bg-white p-12">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-lg font-gtMedium">
                {title}
              </DialogTitle>

              <CloseButton className="flex items-center gap-2 border rounded-md p-1">
                <IconX />
              </CloseButton>
            </div>

            <img src={image} />
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}
