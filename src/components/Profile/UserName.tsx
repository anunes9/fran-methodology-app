import { useEffect, useState } from "react"
import { IconEdit } from "@tabler/icons-react"
import { useAuth } from "../../hooks/useAuth"

export const UserName = () => {
  const [editMode, setEditMode] = useState(false)
  const [error, setError] = useState("")
  const { updateUser, userData } = useAuth()
  const [name, setName] = useState(userData?.name)

  useEffect(() => {
    setName(userData?.name)
  }, [userData?.name])

  useEffect(() => {
    setError("")
  }, [name])

  const handleUpdateName = async () => {
    if (name?.length === 0) {
      setError("Name is required")
      return
    } else {
      await updateUser({ name: name! })
      setEditMode(false)
      setError("")
    }
  }

  const handleCancel = () => {
    setName(userData?.name)
    setEditMode(false)
    setError("")
  }

  if (editMode)
    return (
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Name"
          className="py-2 px-4 rounded-lg border border-gray-300 w-full bg-slate-100"
          value={name}
          required
          onChange={(event) => setName(event.target.value)}
        />

        {error && <p className="text-red-500">{error}</p>}

        <div className="flex justify-end gap-4">
          <button
            className="py-2 px-4 rounded-lg text-white bg-gray-400 hover:bg-gray-400/80"
            onClick={handleCancel}
          >
            Cancel
          </button>

          <button
            className="py-2 px-4 rounded-lg text-white bg-projectGreen hover:bg-projectGreen/80"
            onClick={handleUpdateName}
          >
            Update
          </button>
        </div>
      </div>
    )

  return (
    <dd className="text-gray-700 sm:col-span-2 flex gap-4 items-center">
      {userData?.name}

      <div
        onClick={() => setEditMode(!editMode)}
        className="cursor-pointer hover:bg-foreground/10 p-1 rounded-md"
      >
        <IconEdit height={18} />
      </div>
    </dd>
  )
}
