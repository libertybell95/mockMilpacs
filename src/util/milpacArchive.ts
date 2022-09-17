// Utilities for updating the milpac archive
import axios from 'axios'
import dotenv from 'dotenv'
import db from '../db'
import Milpacs from '../entities/Milpacs'

dotenv.config()
const milpac = db.getRepository(Milpacs)

async function pullRoster(rosterName: string): Promise<object[]> {
  const request = await axios.get(`https://api.7cav.us/api/v1/roster/${rosterName}`, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`
    }
  })

  let profiles = []
  for (const profile in request.data.profiles) {
    profiles.push({
      id: profile,
      ...request.data.profiles[profile]
    })
  }

  return profiles
}

// Pull entierety of milpacs via API
async function pullMilpacs(): Promise<object[]> {
  const rosters = [
    'ROSTER_TYPE_COMBAT',
    'ROSTER_TYPE_RESERVE',
    'ROSTER_TYPE_ELOA',
    'ROSTER_TYPE_WALL_OF_HONOR',
    'ROSTER_TYPE_ARLINGTON',
    'ROSTER_TYPE_PAST_MEMBERS'
  ]

  let allMilpacs: any[] = []

  for (const roster of rosters) {
    const downloadedRoster = await pullRoster(roster)
    allMilpacs = allMilpacs.concat(downloadedRoster)
  }

  return allMilpacs
}

async function saveMilpacsArchive(): Promise<void> {
  const profiles = await pullMilpacs()
  const date = new Date()
  const data = await milpac.upsert(
    [
      { date: date, milpac: profiles}
    ],
    ['date']
  )
}

// Check to see if the most recent archive is within ARCHIVE_INTERVAL_DAYS
// If most recent archive is outside of archival interval, return true
async function checkArchiveAllowed() {
  const mostRecent = await milpac.find({
    order: {
      date: 'DESC'
    },
    take: 1,
    select: {
      date: true
    }
  })

  return mostRecent[0].date !== new Date()
}

async function archiveMilpacs() {

}

async function repopulateDB() {

}