export interface Project {
    projectId: number
    projectName: string
    projectType: number
    projectStatus: number
    description: string
    departmentId: number
    organizationId: number
    totalFilesCount: number
    mainVideoId: number | null
    mainVideoThumbnail: string
    createDate: string
    projectOwner: any
    timeline: any
    projectMembers: any
    deleted: boolean
    deletedDate: any
    category: string
    isLocked: boolean
    lockedTime: any
    lockedByEmail: any
    lockedByPersonId: any
    viddlerVideoId: string
    mainVideoFileDuration: number
}