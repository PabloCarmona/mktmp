#!/usr/bin/env node

const { exec } = require('child_process')

function padded(num) {
  return num < 10 ? '0' + num : num
}

function generateFolderName() {
  const date = new Date()
  const year = date.getFullYear()
  const month = padded(date.getMonth() + 1)
  const day = padded(date.getDate())
  const hour = padded(date.getHours())
  const minute = padded(date.getMinutes())
  const second = padded(date.getSeconds())

  return `tmp-${year}${month}${day}${hour}${minute}${second}`
}

exec(`mkdir ${generateFolderName()}`, (err, stdout, stderr) => {
  if (err) {
    return console.error(err)
  }
  if (stderr) {
    return console.error(stderr)
  }
  exec('ls -la', (err, stdout, stderr) => {
    if (err) {
      return console.error(err)
    }
    if (stderr) {
      return console.error(stderr)
    }
    console.log(`Created one folder with name ${generateFolderName()}.\n${stdout}`)
  })
})