#!/usr/bin/env python

import subprocess
import sys
import os
import fnmatch

blacklist = sorted([
'scripts',
'.DS_Store',
'.git',
])

serverPathPrefix = '~/'

def main(args) :
	mainDir, scriptDir = os.path.split(os.path.dirname(os.path.realpath(__file__)))

	for root, dirnames, filenames in os.walk(mainDir) :
		matches = []
		if not fileInBlacklist(root) :
			for filename in filenames :
				if not fileInBlacklist(filename) :
					matches.append(os.path.join(root, filename))
			subPathFromMain = serverPathPrefix + root[len(mainDir):]
			uploadFiles(subPathFromMain, matches)

def fileInBlacklist(filename) :
	for blacklisted in blacklist :
		if filename.endswith(blacklisted) or ('/' + blacklisted + '/') in filename :
			return True
	return False

def uploadFiles(serverPath, files) :
	bashCommand = 'gcloud compute copy-files ' + ' '.join(files) + ' waffles-instance-1:' + serverPath + ' --zone us-central1-c'
	print 'Running command:', bashCommand
	process = subprocess.Popen(bashCommand.split(), stdout=subprocess.PIPE)
	output = process.communicate()[0]

if __name__ == "__main__": main(sys.argv)